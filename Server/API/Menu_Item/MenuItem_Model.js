const mongoose = require('mongoose');


let current = new Date();
let timeStamp = current.setHours(current.getHours() + 6);



const MenuItemSchema = mongoose.Schema({
    menu_name: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    createdOn: {
        type: Date,
        default: timeStamp
    },
})

module.exports = mongoose.model('Menu_Item', MenuItemSchema)