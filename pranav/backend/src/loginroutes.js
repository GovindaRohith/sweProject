const express = require('express');
const router = express.Router();
const db = require('./db'); 
// Home page route
router.get('/', (req, res) => {
    res.send('Login route')
    console.log('Login route');

});
router.post('/', (req, res) => {
    console.log(req.body);
    db.query('SELECT * FROM users WHERE id = ? AND password = ?', [req.body.id, req.body.password], (error, results, fields) => {
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred while logging in');
        } else {
            if (results.length > 0) {
                res.status(200).send('Login successful');
            } else {
                res.status(401).send('Invalid login credentials');
            }
        }
    }
    );
    
  
});

module.exports = router;
