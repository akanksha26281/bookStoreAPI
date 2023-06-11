const express = require("express");
const user_route = express.Router();
const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const bodyParser = require('body-parser');
const req = require("express/lib/request");
const res = require("express/lib/response");
const config = require("../config/config");
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));





//function to secure password
const securePassword = async(password) =>{

    try{
        const hashPassword = await bcryptjs.hash(password, 10);
        return hashPassword;
    }catch(error){
        res.status(400).send(error.message);
    }

}


//For user registeration
user_route.post('/register', async(req, res) =>{
    
    const mypassword = await securePassword(req.body.password);

    const user = new User({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        password: mypassword,
    })
    //saving the user in database
    user.save()
    .then(result =>{
        console.log(result);
        res.status(200).send({ succeess:true, msg:"New user", data:result});
    })
    .catch(err=>{
        console.log(err);
        res.status(200).send({success:false, msg:err.message});
    })
});




//For user login
user_route.post('/login', (req, res) =>{
    User.find({email: req.body.email})
    .exec()
    .then(user =>{
        if(user.length < 1){
            return res.status(400).send({ msg:"User Not Found!" })
        }
        //checks if the password matches or not
        bcryptjs.compare(req.body.password, user[0].password, (err, result) =>{
            if(!result){
                return res.status(400).send({ msg:"Invalid Credentials!" })
            }
            //generates a token for future authentication
            const token = jwt.sign({
                name: user[0].name,
                contactNumber: user[0].contactNumber,
                email: user[0].email,
            }, 
            config.secret_key,
            { expiresIn: "24h" }
            );
            res.status(200).send({email: user[0].email, token: token})
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(400).send({success:false, msg:err.message});
    })
});



module.exports = user_route;