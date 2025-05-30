const sellerModel = require('../Models/sellerModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const land = require('../Models/landModel')
const contactModel= require('../Models/contactModel')


const adminLogin = async (req, res) => {
  try {
   const { adminEmail, adminPassword } = req.body;
   if (!adminEmail || !adminPassword) {
  return res.status(400).json({ message: "All fields are mandatory!" });
}


    if (adminEmail === process.env.admin_email) {
      const isCompare = await bcrypt.compare(adminPassword, process.env.admin_password);
      if (!isCompare) {
        return res.status(401).json({ message: "Invalid credentials!" });
      }

      const token = jwt.sign(
        { adminEmail, role: "admin" },
        process.env.secret_key,
        { expiresIn: '1d' }
      );

      return res.status(200).json({ message: "Admin login successful!", token });
    }
    return res.status(403).json({ message: "Access denied! Not an admin." });

  } catch (error) {
    console.error(error);
       return res.status(500).json({ message: "Something went wrong!" });
  }
};

const getSellers = async (req, res) => {
  try {
    const getUsers = await sellerModel.find();
    if (getUsers.length === 0) {
      return res.status(404).json({ message: "Sellers record not found!" });
    }

    return res.status(200).json({ message: "Sellers records successfully fetched!", sellers: getUsers });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

const getContacts= async (req,res) =>{
  try {
    const fetchFeed= await contactModel.find()
    if(fetchFeed.length===0){
     return res.status(404).json({message:"Contact record not found!"})
    }
   return res.status(200).json({message:"Contact record suceessfully fetched",fetchedDetils:fetchFeed})
  } catch (error) {
        return res.status(500).json({ message: "Something went wrong!" });

  }
}

// Get All Lands
const getAllLands = async (req, res) => {
  try {
    const lands = await land.find({});
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

const getLandId= async(req,res)=>{
  try {
      const {id}= req.params
      const findLand= await land.findById(id)
      if(!findLand){
        res.status(404).json({message:"Land does not found!"})
      }
      res.status(200).json({result:true,message:"Land has successfully found!",Data:findLand})
  } catch (error) {
    res.status(500).json({error:"Something went wrong!"})

  }
}

// Activate or Deactivate Seller
const toggleSellerStatus = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const seller = await sellerModel.findById(sellerId);

    if (!seller) {
      return res.status(404).json({ message: "Seller not found!" });
    }

    seller.isActive = seller.isActive === "Active" ? "Inactive" : "Active";
    await seller.save();

    return res.status(200).json({ message: `Seller status updated to ${seller.isActive}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update seller status." });
  }
};

// Toggle Land Status
const toggleLandStatus = async (req, res) => {
  try {
    const { landId } = req.params;
    const { newStatus } = req.body; // Must be one of ["Approved", "Declined", "Pending"]

    // Validate input
    if (!["Approved", "Declined", "Pending"].includes(newStatus)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const landData = await land.findById(landId);
    if (!landData) {
      return res.status(404).json({ message: "Land not found!" });
    }

    landData.status = newStatus;
    await landData.save();
    return res.status(200).json({ message: `Land status updated to ${newStatus}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update land status." });
  }
};


module.exports = { getSellers, adminLogin,getContacts,getAllLands,getLandId,toggleSellerStatus,toggleLandStatus};
