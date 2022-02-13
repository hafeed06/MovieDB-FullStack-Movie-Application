const mongoose = require('mongoose'); 
const movieRatingSchema= new mongoose.Schema({
    movieid: {
        type:String,
        required:true
    },
    userid: {
        type:Number,
        required:true
    },
    rating: {
        type:Number,
        required:true
    },
    commentTitle: {
        type:String,
        required:true
    },
    commentContent: {
        type:String,
        required:true
    },
},{ collection: 'movieratings' })
module.exports = mongoose.model('movieratings', movieRatingSchema)