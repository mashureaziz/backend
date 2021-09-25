const express = require('express');
const path = require('path');

const router = express.Router();

router.post('/upload' ,(req,res) => {
    if(!req.files) {
        res.status(400).send('No file uploaded!');
    }
    const file = req.files.profile;
    const profileName = req.body.name;
    const extension = path.extname(file.name);
    const movePath = path.join(__dirname,'../uploads/')+ profileName + extension;
    console.log(movePath);

    file.mv(movePath, (err) => {
        if(err) {
            res.status(500).send('Something went wrong');
        }
        else {
            res.status(201).send({status: 'All went well'});
        }
    });
});

module.exports ={
    fileUploadRouter : router
}