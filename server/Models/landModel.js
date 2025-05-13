const mongoose = require("mongoose");

const landSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Land title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    address: {
      type:String,
      required:true
        },
    imageUrls: {
      type: String,
      // required:true
      // required: [true, "At least one image is required"],
    },
  },
  { timestamps: true}
);

const landModel = mongoose.model("Land", landSchema);
module.exports= landModel