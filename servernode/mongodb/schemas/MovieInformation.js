const mongoose = require('mongoose'); 

const movieInfoSchema= new mongoose.Schema({
    title:String,
    releaseDate: Number,
    category: String,
    movieDirector:String, 
    link: String, 
},{ collection: 'movieinformation' })


module.exports = mongoose.model('movieinformation', movieInfoSchema)