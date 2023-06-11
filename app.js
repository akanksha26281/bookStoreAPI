const express = require('express');
const app = express();

//connecting to database
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://riyakanksha2412:riya0903@cluster0.ekediry.mongodb.net/?retryWrites=true&w=majority");




// user routes
const user_routes = require('./routes/userRoute');
app.use('/api', user_routes);

// book routes
const book_routes = require("./routes/bookRoute");
app.use('/api', book_routes);




app.use((req, res) =>{
    res.status(200).send({msg:"App is running!"})
})

module.exports = app;