const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.post('/writeFile' ,async(req,res) => {
    const data = 'just testing\nmylife';
    await fs.writeFile('test.txt',data,(err) => {
        if(err) {
            console.log(err);
            res.status(500).send('Something went wrong');
        }
    });
    res.send('We all set');
});

module.exports = { 
    writeFileRouter : router
}