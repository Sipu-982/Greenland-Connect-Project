// landController.js
const Land = require("../Models/landModel");
const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");

// Create Land
const createLand = async (req, res) => {
  try {
    const { title, description, price, address } = req.body;

    if (!title || !description || !price || !address) {
      return res.status(400).json({ message: "All fields are required!" });
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

    const land = new Land({
      title,
      description,
      price,
      address,
      imageUrls: result.secure_url,
    });

    await land.save();

    return res.status(201).json({
      success: true,
      message: "Land created successfully",
      data: land,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Something went wrong!",
    });
  }
};

// Get All Lands
const getAllLands = async (req, res) => {
  try {
    const lands = await Land.find({});
    return res.status(200).json({
      success: true,
      data: lands,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Land by ID
const getLandById = async (req, res) => {
  try {
    const { id } = req.params;
    const land = await Land.findById(id);

    if (!land) {
      return res.status(404).json({ message: "Land not found!" });
    }

    return res.status(200).json({
      success: true,
      message: "Land found",
      data: land,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

// search Land

const searchLand = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ message: "This is a mandatory field!" });
    }
    const findLand = await Land.find({
      title: { $regex: title, $options: "i" } 
        });

    res.json({ message: "Search Task...", data: findLand });
  } catch (error) {
    console.error("Search error:", error); 
        res.status(500).json({ message: "Something went wrong!" });
  }
};



// Update Land
const updateLand = async (req, res) => {
  try {
    const updatedLand = await Land.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedLand) {
      return res.status(404).json({
        success: false,
        message: "Land not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Land updated successfully",
      data: updatedLand,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Land
const deleteLand = async (req, res) => {
  try {
    const land = await Land.findByIdAndDelete(req.params.id);

    if (!land) {
      return res.status(404).json({
        success: false,
        message: "Land not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Land deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createLand,
  getAllLands,
  getLandById,
  updateLand,
  searchLand,
  deleteLand,
};
