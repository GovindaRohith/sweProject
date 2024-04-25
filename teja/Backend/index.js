var mysql = require('mysql');
var express = require('express');
var app = express();
const router = express.Router()
var cors = require('cors')



app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  console.log("Backend reciever start ****")
    console.log("Type:  "+req.method)
    console.log("URL:  "+req.path);
    console.log("DATA:  "+req.body);
    console.log("Backend reciever end **")
    next();
})

const con = require("./routes/database");
const users = require("./routes/users");
const forgot_password = require("./routes/forgot_password");
const hostel_blocks = require("./routes/hostel_blocks");
const floors = require("./routes/floors");
const floor_pod = require("./routes/floor_pod");
const tickets_hr = require("./routes/tickets_hr");
const tickets_ho = require("./routes/tickets_ho");

app.use('/users', users);

app.use('/forgot_password', forgot_password);

app.use('/hostel_blocks', hostel_blocks);
app.use('/floors', floors);
app.use('/floor_pod', floor_pod);

app.use('/tickets', tickets_hr);
app.use('/tickets_ho', tickets_ho);

const port = 5000;
const hostname = '127.0.0.1';
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});