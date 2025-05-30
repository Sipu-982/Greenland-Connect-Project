const express = require('express')
const {loginSeller, sellerRegister} = require('../controllers/sellerController')
const multer= require('multer')
const storage= multer.memoryStorage()
const upload= multer({storage})
const router= express.Router()

router.post('/sellerReg',upload.single("image"),sellerRegister)
router.post('/loginSeller',loginSeller)
module.exports=router