const Menu_Item = require('./MenuItem_Model');


const Menus = async (req, res) => {
    let data = await Menu_Item.find();
    res.json(data)
};


const Create = async (req, res) => {
    if (!req.body.menu_name) {
        return res.status(400).json({ error: 'Name Required.' });
    }
    if (!req.body.url) {
        return res.status(400).json({ error: 'URL Required.' });
    }

    const existingMenuName = await Menu_Item.findOne({ menu_name: req.body.menu_name.toLowerCase() });

    if (existingMenuName) {
        return res.status(400).json({ error: 'Menu already exists.' });
    }

    const existingUrl = await Menu_Item.findOne({ url: req.body.url });
    if (existingUrl) {
        return res.status(400).json({ error: 'URL already exists.' });
    }

    const new_menu_item = new Menu_Item({
        menu_name: req.body.menu_name.toLowerCase(),
        url: req.body.url.toLowerCase(),
    });

    await new_menu_item.save();
    res.json(new_menu_item);
};




const View = async (req, res) => {
    let viewOne = await Menu_Item.findOne({
        menu_name: req.params.menu_name
    });

    res.json(viewOne);
};



const Update = async (req, res) => {
    try {
        const { menu_name, url } = req.body;

        const existingMenuName = await Menu_Item.findOne({ menu_name });
        if (existingMenuName && existingMenuName._id.toString() !== req.params._id) {
            return res.status(400).json({ error: 'Menu name already exists.' });
        }

        const existingUrl = await Menu_Item.findOne({ url });
        if (existingUrl && existingUrl._id.toString() !== req.params._id) {
            return res.status(400).json({ error: 'URL already exists.' });
        }

        const updateOne = await Menu_Item.findById(req.params._id);

        updateOne.menu_name = menu_name.toLowerCase();
        updateOne.url = url.toLowerCase();

        await updateOne.save();

        res.json(updateOne);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the menu item.' });
    }
};





const Delete = async (req, res) => {
    await Menu_Item.findByIdAndDelete(req.params._id);

    res.send("Deleted")
};






module.exports = { Menus, Create, View, Update, Delete }