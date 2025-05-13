const express = require('express')
const mongoose = require('mongoose')

const contactSchema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{timestamps:true})

const contactModel= mongoose.model('contact',contactSchema)
module.exports=contactModel