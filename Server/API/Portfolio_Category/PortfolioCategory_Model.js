const mongoose = require('mongoose');


let current = new Date();
let timeStamp = current.setHours(current.getHours() + 6);



const PortfolioCategorySchema = mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        unique: true
    },
    createdOn: {
        type: Date,
        default: timeStamp
    },
})

module.exports = mongoose.model('Portfolio_Category', PortfolioCategorySchema)