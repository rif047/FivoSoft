const mongoose = require('mongoose');


let current = new Date();
let timeStamp = current.setHours(current.getHours() + 6);



const PortfolioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Portfolio_Category'
    },
    createdOn: {
        type: Date,
        default: timeStamp
    },
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)