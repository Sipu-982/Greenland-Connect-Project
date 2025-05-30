const express = require('express')
const bcrypt = require('bcrypt')
const sellerModel = require('../Models/sellerModel')
const jwt = require('jsonwebtoken')
const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");

const sellerRegister = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingSeller = await sellerModel.findOne({ email });
    if (existingSeller) {
      return res.status(400).json({ message: "Seller already exists." });
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number. Must be 10 digits." });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required!" });
    }

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "lands" },
        (error, result) => {
          if (error) {
            console.error("Cloudinary error:", error);
            return reject(error);
          }
          resolve(result);
        }
      );
      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newSeller = new sellerModel({
      name,
      email,
      password: hashedPassword,
      phone,
      profile: result.secure_url
    });

    await newSeller.save();

    return res.status(201).json({ message: "Seller created successfully.", data: newSeller });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Seller creation failed!" });
  }
};

   const loginSeller = async(req,res)=>{
  try {
    const {email,password}= req.body

    if(!email || !password){
  res.status(400).json({message:"All fields are required!"})
 }
  const checkSeller= await sellerModel.findOne({email})
  if(!checkSeller){
      res.status(404).json({message:"Seller doesn't found!"})
  }
  if(checkSeller.isActive==="Inactive"){
    return res.status(403).json({ message: "Your account is deactivated. Please contact admin." });

  }
  const isMatch= await bcrypt.compare(password,checkSeller.password)
  if(!isMatch){
     return res.status(401).json({message:"Password doesn't match"})
  }
  const token = jwt.sign({id:checkSeller._id,email:checkSeller.email},process.env.secret_key,{expiresIn:'1d'})
  return res.status(201).json({message:"Seller Login successfull!",token,data:checkSeller})
 }

catch (error) {
     res.status(500).json({error:"Login failed!"}) 
  }
 }
module.exports= {sellerRegister,loginSeller}