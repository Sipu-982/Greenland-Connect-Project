const express = require('express')
const bcrypt = require('bcrypt')
const sellerModel = require('../Models/sellerModel')
const jwt = require('jsonwebtoken')
const sellerRegistser = async(req,res)=>{
   try {
    const {name,email,password,phone}= req.body

    const getSeller= await sellerModel.findOne({email})
    if(getSeller){
      return  res.status(400).json({message:"Seller already exist.."})
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number. Must be 10 digits." });
    }
    const hashPassword = await bcrypt.hash(password,10)
   const createSeller= new sellerModel({name,email,password:hashPassword,phone})
   createSeller.save()
   return res.status(201).json({message:"Seller created successfully...",data:createSeller})

   } catch (error) {
    return res.status(500).json({error:"Seller creation failed!"})
   }}



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
module.exports= {sellerRegistser,loginSeller}