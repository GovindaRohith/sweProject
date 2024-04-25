const express = require('express');
const router = express.Router();
const db = require('./db'); 

// this is my schema
//create table announcements (
//    id VARCHAR(255) not null,
//    -- who posted the announcement
//    title varchar(255) not null,
//    content varchar(255) not null,
//    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//    -- duration of announcement
//    duration INT not null,
//    -- foreign key (user_id) references users(id)
//    PRIMARY KEY (id, created_at)
//);

//now given an user_id of the user, get all announcements that are posted by the user and also announcements that are posted by the Hostel office who have an ID=ho@gmail.com

router.get('/:user_id', (req, res) => {
    console.log('Announcements route');
    console.log(req.params.user_id);
    db.query('SELECT * FROM announcements WHERE id = ? OR id = "ho@gmail.com"', [req.params.user_id], (error, results, fields) => {
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred while fetching announcements');
        } else {
            console.log(results);
            res.status(200).send(results);
        }
    }
    );
}
);

module.exports = router;