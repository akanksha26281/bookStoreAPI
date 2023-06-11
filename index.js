const http = require("http");
const app = require("./app");
const server = http.createServer(app);


/*
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://riyakanksha2412:riya0903@cluster0.ekediry.mongodb.net/?retryWrites=true&w=majority");



// user routes
const user_routes = require('./routes/userRoute');
app.use('/api', user_routes);

// book routes
const book_routes = require("./routes/bookRoute");
app.use('/api', book_routes);



app.listen(3000, function(){
    console.log('app is running!') 
 });
*/


 server.listen(3000, console.log("app is running!"));