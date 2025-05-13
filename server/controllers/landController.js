const Land = require("../Models/landModel");

// Create Land
const createLand = async (req, res) => {
  try {
    const {title,description,price,address} = req.body
    if(!title  || !description || !price || !address){
      res.status(400).json({message:"All fields are required!"})
    }
    const land = new Land({title,description,price,address})
    await land.save()
   
   return res.status(201).json({
      success: true,
      message: "Land created successfully",
      data: land,
    });
  } catch (error) {
   return res.status(400).json({
      success: false,
      message: error.message,
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

const getLandById= async(req,res)=>{
  try {
      const {id}= req.params
      const findLand= await Land.findById(id)
      if(!findLand){
        res.status(404).json({message:"Land does not found!"})
      }
      res.status(200).json({result:true,message:" has found!",Data:findLand})
  } catch (error) {
    res.status(500).json({error:"Something went wrong!"})

  }
}

// Edit Land
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

    res.status(200).json({
      success: true,
      message: "Land updated successfully",
      data: updatedLand,
    });
  } catch (error) {
    res.status(400).json({
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

    res.status(200).json({
      success: true,
      message: "Land deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
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
  deleteLand,
};
