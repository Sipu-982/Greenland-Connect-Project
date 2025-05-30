const mongoose = require("mongoose");

const landSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Land title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    imageUrls: {
      type: String, 
      required: [true, "Image URL is required"],
    },
    status: {
      type: String,
      enum: ["Approved", "Declined", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const landModel = mongoose.model("Land", landSchema);
module.exports = landModel;
