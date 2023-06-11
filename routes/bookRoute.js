const express = require("express");
const book_route = express.Router();
const Book = require("../models/bookModel");
const mongoose = require("mongoose");


const bodyParser = require('body-parser');
book_route.use(bodyParser.json());
book_route.use(bodyParser.urlencoded({extended:true}));



const auth = require("../middleware/auth");



//For adding a new book
book_route.post('/items', auth, (req, res) =>{
    var newBook = new Book({
        _id: new mongoose.Types.ObjectId,
        book_name: req.body.book_name,
        author_name: req.body.author_name,
        category: req.body.category,
        price: req.body.price,
        about: req.body.about,
    })
    //to save the book in database
    newBook.save()
    .then(result =>{
        console.log(result);
        res.status(200).send({ success:true, msg:"Book Details", newBook:result});
    })
    .catch(err =>{
        console.log(err);
        res.status(500).send({ success:false, msg:err.message });
    })
});




//For getting all books data
book_route.get('/items', auth, (req, res) =>{
    Book.find()
    .then(result=>{
        res.status(200).send({ sucess:true, msg:"Book Details", data:result});
    })
    .catch(err =>{
        console.log(err);
        res.status(400).send({ success:false, msg: err.message});
    })
});




//For getting a book data by it's ID
book_route.get('/items/:id', auth, (req, res)=>{
    Book.findById(req.params.id)
    .then(result=>{
        res.status(200).send({ success:true, msg:"Book Detail", data:result})
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send({ success:false, msg:err.message});
    })
});




//For Updatind a book data
book_route.put('/items/:id', auth, (req, res) =>{
    Book.findOneAndUpdate({_id:req.params.id}, {
        $set:{
            book_name: req.body.book_name,
            author_name: req.body.author_name,
            category: req.body.category,
            price: req.body.price,
            about: req.body.about,
        }
    })
    .then(result =>{
        res.status(200).send({ success:true, msg:"Updated Book Detail", data:result})
    })
    .catch(err =>{
        console.log(err);
        res.status(400).send({ success:false, msg:err.message});
    })
});




//For Deleting a book
book_route.delete('/items/:id', auth, (req, res) =>{
    Book.deleteOne({_id:req.params.id})
    .then(reslt=>{
        res.status(200).send({ success:true, msg:"Book deleted successfully!", result:reslt});
    })
    .catch(err=>{
        res.status(400).send({ success:false, msg:err.message});
    })
});


module.exports = book_route;