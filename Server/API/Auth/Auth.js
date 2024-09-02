const Auth = require("express").Router();
const { User } = require("../User/User_Model");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'super-secret-key'

Auth.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });


        const { username, password } = req.body
        const user = await User.findOne({ username })


        if (!user) {
            return res.status(401).json({ error: 'Invalid username' })
        }


        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' })
        }



        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1d' })

        res.json({ message: 'Login successful' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error logging in' })
    }
});

const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = Auth;
