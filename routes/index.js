const express = require('express');
const router = express.Router();

// Login Page
router.get('/',(req,res) => res.render('welcome'));


module.exports = router; 


// https://youtu.be/6FOq4cUdH8k?t=1008