const Category = require('./PortfolioCategory_Model');


const Categories = async (req, res) => {
    let data = await Category.find();
    res.json(data)
};






const Create = async (req, res) => {
    if (!req.body.category_name) {
        return res.json({ error: 'Required field.' });
    }
    const checkExisting = await Category.findOne({ category_name: req.body.category_name.toLowerCase() });

    if (checkExisting) {
        return res.status(400).json({ error: 'Already exists.' });
    }


    const new_portfolio_category = new Category({
        category_name: req.body.category_name.toLowerCase()
    });

    await new_portfolio_category.save();
    res.json(new_portfolio_category);
};






const View = async (req, res) => {
    let viewOne = await Category.findOne({
        category_name: req.params.category_name
    });

    res.json(viewOne);
};






const Update = async (req, res) => {
    const { category_name } = req.body;

    if (!category_name) {
        return res.json({ error: 'Required field.' });
    }

    const checkExisting = await Category.findOne({
        _id: { $ne: req.params.id },
        category_name: category_name.toLowerCase()
    });

    if (checkExisting && checkExisting._id !== req.params.id) {
        return res.status(400).json({ error: 'Already exists.' });
    }

    const updateOne = await Category.findById(req.params.id);

    updateOne.category_name = category_name.toLowerCase();

    await updateOne.save();

    res.json(updateOne);
};







const Delete = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);

    res.send("Deleted")
};






module.exports = { Categories, Create, View, Update, Delete }