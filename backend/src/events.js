const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('./db.js');


router.get('/', (req, res) => {
    res.sendFile("This is route1 page");
});

module.exports = router;


