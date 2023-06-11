const jwt = require('jsonwebtoken');
const config = require('../config/config');


//function to manage the verification of token
const verifyToken = async(req, res, next) =>{

    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        //verifing token
        const verify = jwt.verify(token, config.secret_key);
        next();
    } catch (error) {
        return res.status(400).send({ success: false, msg: "invalid token"})
    }


}

module.exports = verifyToken;