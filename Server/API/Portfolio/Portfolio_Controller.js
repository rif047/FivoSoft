const Portfolio = require('./Portfolio_Model');
const Multer = require('multer');


const storage = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Assets/Images/Portfolio/')
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name)
    }
})

const uploadImg = Multer({ storage: storage })


const Portfolios = async (req, res) => {
    const data = await Portfolio.find().populate('category');
    res.json(data)
};




const Create = async (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ error: 'Name Required.' });
    }
    if (!req.body.url) {
        return res.status(400).json({ error: 'URL Required.' });
    }

    if (!req.file) {
        return res.status(400).json({ error: 'Image Required.' });
    }

    if (!req.body.category) {
        return res.status(400).json({ error: 'Category Required.' });
    }

    const checkNameExisting = await Portfolio.findOne({
        name: req.body.name.toLowerCase()
    });

    const checkUrlExisting = await Portfolio.findOne({
        url: req.body.url.toLowerCase()
    });

    if (checkNameExisting) {
        return res.status(400).json({ error: 'Name Already exists.' });
    }

    if (checkUrlExisting) {
        return res.status(400).json({ error: 'URL Already exists.' });
    }

    const newPortfolio = new Portfolio({
        name: req.body.name.toLowerCase(),
        url: req.body.url.toLowerCase(),
        description: req.body.description,
        category: req.body.category,
        image: req.file.filename
    });

    await newPortfolio.save();
    res.json(newPortfolio);
};







const View = async (req, res) => {
    let viewOne = await Portfolio.findOne({
        name: req.params.name
    }).populate('category');

    res.json(viewOne);
};






const Update = async (req, res) => {
    const { name, url, description, category } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name Required.' });
    }
    if (!url) {
        return res.status(400).json({ error: 'URL Required.' });
    }
    if (!category) {
        return res.status(400).json({ error: 'Category Required.' });
    }

    const checkExistingName = await Portfolio.findOne({
        _id: { $ne: req.params.id },
        name: name.toLowerCase()
    });

    const checkExistingUrl = await Portfolio.findOne({
        _id: { $ne: req.params.id },
        url: url.toLowerCase(),
    });

    if (checkExistingName && checkExistingName._id !== req.params.id) {
        return res.status(400).json({ error: 'Name Already exists.' });
    }

    if (checkExistingUrl && checkExistingUrl._id !== req.params.id) {
        return res.status(400).json({ error: 'URL already exists.' });
    }

    const updateOne = await Portfolio.findById(req.params.id);

    updateOne.name = name.toLowerCase();
    updateOne.url = url.toLowerCase();
    updateOne.description = description;
    updateOne.category = category;
    if (req.file) {
        updateOne.image = req.file.filename;
    }

    await updateOne.save();

    res.json(updateOne);
};







const Delete = async (req, res) => {
    await Portfolio.findByIdAndDelete(req.params.id);

    res.send("Deleted")
};






module.exports = { Portfolios, Create, View, Update, Delete, uploadImg }