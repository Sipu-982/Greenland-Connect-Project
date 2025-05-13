const contactModel = require('../Models/contactModel')

const submitData = async (req,res)=>{
try {
    const {fullname,email,phone,message}= req.body
    const newContact= new contactModel({fullname,email,phone,message})
    await newContact.save()
 return res.status(201).json({message:"Message has successfully submitted!",data:newContact})
} catch (error) {
 return res.status(500).json({error:"Form Submission Failed!"})  
}}

module.exports=submitData