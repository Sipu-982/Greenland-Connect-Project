const express = require("express");
const {
  createLand,
  getAllLands,
  updateLand,
  deleteLand,
  getLandById,
  searchLand,
} = require("../controllers/landController"); 
const multer= require('multer')
const storage= multer.memoryStorage()
const upload= multer({storage})
const authenticateSeller = require("../middleware/useMiddleware");

const router = express.Router();

router.post("/create",authenticateSeller,upload.single("image"),createLand);
router.get("/all",authenticateSeller,getAllLands);
router.get("/getLandById/:id",authenticateSeller,getLandById)
router.get("/searchLand",authenticateSeller,searchLand)
router.put("/update/:id",authenticateSeller,updateLand);

// Delete Land
router.delete("/delete/:id",authenticateSeller,deleteLand);

module.exports = router;
