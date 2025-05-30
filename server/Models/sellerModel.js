const mongoose = require('mongoose')
const sellerSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"] 
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],
      },
      password: { 
        type: String, 
        required: [true, "Password is required"] 
      },
      phone: {
        type: String,
        required: [true, "Phone number is required"],
        unique: [true, "Phone number must be unique"],
      },
      profile:{
        type:String,
        required:true,
      },
      isActive: {
              type: String,
              enum: ["Active", "Inactive"],
              default: "Inactive",
}

    }, {timestamps:true})

    const sellerModel= mongoose.model('seller',sellerSchema)
  module.exports=sellerModel
