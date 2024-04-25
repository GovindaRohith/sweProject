var express = require('express');
const router = express.Router()

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

var db = require('./database');
const con = require('./database');

router.post('/', function (req, res) {
    console.log("bring_password")
    console.log(req.body)
    var password_recovered = "NULL_PASSWORD ";
    var email_id = req.body.email_id;
    console.log(email_id + ' email-----id  ');

    db.query('SELECT password FROM users WHERE id = ?', email_id, function (error, results, fields) {
        console.log(results);
        if (error) throw error;
        password_recovered = results[0].password;
        console.log("password_recovered: ", password_recovered);
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'cs21btech11059@iith.ac.in',
              pass: 'fdez jgow ubce ifps'
            }
          });

            // Email content
        const mailOptions = {
            from: 'cs21btech11059@iith.ac.in',
            to: email_id,
            subject: "Password Recovery",
            text: "Your password is: "+password_recovered
        };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        console.log("Sending email");
        console.log(email_id);
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent');
            // give an alert box email sent
           
        }
    });

    });
} );

module.exports = router;