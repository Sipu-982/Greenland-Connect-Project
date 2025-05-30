const express= require('express')
const { adminLogin, getSellers, getContacts, getAllLands, toggleSellerStatus, toggleLandStatus,getLandId } = require('../controllers/AdminController')
const router= express.Router()
const adminController = require("../controllers/AdminController");
const authenticateSeller= require('../middleware/useMiddleware')

router.post('/adminLogin',adminLogin)
router.get('/getSellers',authenticateSeller,getSellers)
router.get('/getContacts',authenticateSeller,getContacts)
router.get('/getAllLands',authenticateSeller,getAllLands)
router.get('/getLandId/:id',authenticateSeller,getLandId)
router.patch('/toggleSeller/:sellerId', authenticateSeller,toggleSellerStatus);
router.patch('/toggleLand/:landId', authenticateSeller,toggleLandStatus);

module.exports= router