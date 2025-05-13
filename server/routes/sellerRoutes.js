const express = require('express')
const {sellerRegistser, loginSeller} = require('../controllers/sellerController')
const router= express.Router()

router.post('/sellerReg',sellerRegistser)
router.post('/loginSeller',loginSeller)
module.exports=router