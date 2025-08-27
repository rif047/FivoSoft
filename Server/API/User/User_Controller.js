const { User, validate } = require('./User_Model');
const bcrypt = require("bcrypt");


const Users = async (req, res) => {
    let data = await User.find();
    res.json(data)
};






const Create = async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });




        const checkEmail = await User.findOne({ email: req.body.email });
        if (checkEmail)
            return res.status(400).send({ message: "Email already exist!" });

        const checkUsername = await User.findOne({ username: req.body.username });
        if (checkUsername)
            return res.status(400).send({ message: "Username already exist!" });




        const hashPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = await new User({
            name: req.body.name,
            username: req.body.username.toLowerCase(),
            email: req.body.email.toLowerCase(),
            password: hashPassword,
            repeat_password: hashPassword
        });

        newUser.save();
        res.status(201).send(newUser);

    } catch (error) {
        res.status(500).send({ message: "Error! Can't Create User" });
    }
};






const View = async (req, res) => {
    let viewOne = await User.findOne({
        username: req.params.username
    });

    res.json(viewOne);
};






const Update = async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });


        const checkEmail = await User.findOne({
            _id: { $ne: req.params.id },
            email: req.body.email
        });
        if (checkEmail)
            return res.status(400).send({ message: "Email already exist!" });

        const checkUsername = await User.findOne({
            _id: { $ne: req.params.id },
            username: req.body.username
        });
        if (checkUsername)
            return res.status(400).send({ message: "Username already exist!" });


        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const updateUser = await User.findById(req.params.id);

        updateUser.name = req.body.name,
            updateUser.username = req.body.username.toLowerCase(),
            updateUser.email = req.body.email.toLowerCase(),
            updateUser.password = hashPassword,
            updateUser.repeat_password = hashPassword

        await updateUser.save();
        res.status(201).send(updateUser);

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error! Can't Update" });
    }
};







const Delete = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);

    res.send("Deleted")
};






module.exports = { Users, Create, View, Update, Delete }