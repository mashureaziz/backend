const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const checkAuth = (req,res,next) => {
    try {
    const payLoad = jwt.verify(
        req.session.jwtoken,
        process.env.TOKEN_SECRET
    )
    req.currentUser = payLoad.name;``
    next();
    }
    catch(err) {
        throw new Error('Unauthorized');
    }
}

module.exports = {
    checkAuth
}