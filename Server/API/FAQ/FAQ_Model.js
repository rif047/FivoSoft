const mongoose = require('mongoose');

let current = new Date();
let timeStamp = current.setHours(current.getHours() + 6);


const FAQSchema = mongoose.Schema({
    que: {
        type: String,
        required: true
    },
    ans: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: timeStamp
    },
})

module.exports = mongoose.model('FAQ', FAQSchema);