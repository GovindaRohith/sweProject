const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// routes
const loginRoutes = require('./src/loginroutes');
const hr_announcements = require('./src/hr_announcements');
const ratingpage = require('./src/ratingpage');
const checkin_approval = require('./src/checkin_approval');
const roomexchange_approval = require('./src/roomexchange_approval');
app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
    console.log("Backend receiver start **********")
    console.log("Type:  " + req.method)
    console.log("URL:  " + req.path);
    console.log("DATA:  " + req.body);
    console.log("Backend receiver end ******")
    next();
});

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use routes
app.get('/', (req, res) => {
    res.send("This is home page")
});
app.use('/login', loginRoutes);
app.use('/hr_announcements', hr_announcements);
app.use('/ratingpage', ratingpage);
app.use('/checkin_approval', checkin_approval);
app.use('/roomexchange_approval', roomexchange_approval);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
