const mongoose = require('mongoose');
const joi = require("joi");

let current = new Date();
let timeStamp = current.setHours(current.getHours() + 6);


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    repeat_password: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: timeStamp
    },
})

const User = module.exports = mongoose.model('User', UserSchema)


const validate = (data) => {
    const schema = joi.object({
        name: joi.string().required().label("Name"),
        username: joi.string().required().label("Username"),
        email: joi.string().email().required().label("Email"),
        password: joi.string().min(6).max(12).required().label("Password"),
        repeat_password: joi.any().valid(joi.ref('password')).required().messages({ "any.only": "Password must match" })
    });
    return schema.validate(data);
};


module.exports = { User, validate };