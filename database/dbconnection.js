const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mindroots:mindroots@cluster0.ecqpx.mongodb.net/demoDatabase?retryWrites=true&w=majority", ()=> {
    console.log("db connected");
})