var express = require('express');
const router = express.Router()
var db = require('./database');

router.get('/', function (req, res) {
    console.log("users")
    db.query('SELECT * FROM users', function (error, results, fields) {
        console.log(results);
        if (error) throw error;
        res.send(results);
    });
});

router.post('/', function (req, res) {
    console.log("users")
    console.log(req.body)
    db.query('INSERT INTO users SET ?', req.body, function (error, results, fields) {
        console.log(results);
        if (error) throw error;
        res.send(results);
    });
} );

module.exports = router;