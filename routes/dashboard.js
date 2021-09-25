const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const {checkAuth} = require('../middlewares/checkAuth');

dotenv.config();

const router = express.Router();

router.get('/api/dashboard', checkAuth, (req,res) =>{
    res.send(`Welcome to dashboard ${req.currentUser}`);
});

module.exports = {
    dashRouter : router
}