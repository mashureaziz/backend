const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();
const login = {
    user: 'monty',
    password: 'hushhush'
 }


router.post('/api/login', (req,res) =>{
    
   const { user, password } = req.body;

   if(user === login.user && password === login.password) {

       const token = jwt.sign({
           name : user
       },
       process.env.TOKEN_SECRET,
       {expiresIn : '200s' });

       req.session = {
        jwtoken : token
       }

       res.send(`Welcome ${user}`);
   }
  else {
   res.status(401).send('Unauthorized');
  }
});

module.exports = {
    loginRouter: router
}