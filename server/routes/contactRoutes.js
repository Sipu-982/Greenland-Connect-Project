const express =require('express')
const submitData = require('../controllers/contactController')
const router = express.Router()

router.post('/submitData',submitData)

module.exports=router