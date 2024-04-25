const express = require('express')
const app = express()
const path = require('path')
const port = 5000
var cors = require('cors')

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Backend reciever start **********")
    console.log("Type:  "+req.method)
    console.log("URL:  "+req.path);
    console.log("DATA:  "+req.body);
    console.log("Backend reciever end ******")
    next();
})


app.get('/',(req, res)=>{
  res.send("This is home page")
})
app.post('/',(req, res)=>{
  res.send("This is home page")
})

const announcements=require('./src/announcements')
const MyProfile = require("./src/myProfile")
const MyPod = require("./src/myPod")
const AllotHr = require("./src/allotHr")
const Tickets = require("./src/tickets")

app.use('/announcements',announcements);
app.use("/myProfile",MyProfile);
app.use("/myPod", MyPod);
app.use("/allotHr", AllotHr);
app.use("/tickets", Tickets);

app.listen(port, function(){
  // console.log(process.env.PORT)
  console.log('Your node js server is running on url http://localhost:'+(port));
} );