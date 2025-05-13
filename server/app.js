const mongoose = require('mongoose');
const connectDB = require('../server/config/dbConnect');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sellerRoutes= require('./routes/sellerRoutes')
const landRoutes= require('./routes/landRoutes')
const contactRoutes= require('./routes/contactRoutes')
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 3000;

app.use('/api/seller',sellerRoutes)
app.use('/api/land',landRoutes)
app.use('/api/contact',contactRoutes)

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
