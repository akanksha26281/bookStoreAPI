var mongoose = require("mongoose");

//book model schema
var bookSchema = mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    book_name:{
        type: String,
        required: true
    },
    author_name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    about:{
        type: String,
        required: true
    },
});


module.exports = mongoose.model("Book", bookSchema);