const express = require("express");
const {
  createLand,
  getAllLands,
  updateLand,
  deleteLand,
  getLandById,
} = require("../controllers/landController"); // importing from landController
const authenticateSeller = require("../middleware/useMiddleware");

const router = express.Router();

// Create Land
router.post("/create",authenticateSeller,createLand);

// Get All Lands
router.get("/all",authenticateSeller,getAllLands);
router.get("/getLandById/:id",authenticateSeller,getLandById)
// Update Land
router.put("/update/:id",authenticateSeller,updateLand);

// Delete Land
router.delete("/delete/:id",authenticateSeller,deleteLand);

module.exports = router;
