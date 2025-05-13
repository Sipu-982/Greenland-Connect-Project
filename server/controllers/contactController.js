const contactModel = require('../Models/contactModel')

const submitData = async (req,res)=>{
try {
    const {fullname,email,phone,message}= req.body
    if(!fullname || !email || !phone || !message){
        res.status(400).json({message:"All fields are required"})
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number." });
    }
    const newContact= new contactModel({fullname,email,phone,message})
    await newContact.save()
 return res.status(201).json({message:"Message has successfully submitted!",data:newContact})
} catch (error) {
 return res.status(500).json({error:"Form Submission Failed!"})  
}}

module.exports=submitData