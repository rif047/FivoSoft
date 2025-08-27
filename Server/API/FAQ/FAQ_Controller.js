const FAQ = require('./FAQ_Model');


const FAQs = async (req, res) => {
    let data = await FAQ.find();
    res.json(data)
};






const Create = async (req, res) => {
    if (!req.body.que) {
        return res.json({ error: 'Required field.' });
    }
    const checkExisting = await FAQ.findOne({ que: req.body.que.toLowerCase() });

    if (checkExisting) {
        return res.status(400).json({ error: 'Already exists.' });
    }


    const newFaq = new FAQ({
        que: req.body.que.toLowerCase(),
        ans: req.body.ans.toLowerCase()
    });

    await newFaq.save();
    res.json(newFaq);
};






const View = async (req, res) => {
    let viewOne = await FAQ.findOne({
        que: req.params.que
    });

    res.json(viewOne);
};






const Update = async (req, res) => {
    const { que, ans } = req.body;

    if (!que) {
        return res.json({ error: 'QUE Required field.' });
    }
    if (!ans) {
        return res.json({ error: 'ANS Required field.' });
    }

    const checkExisting = await FAQ.findOne({
        _id: { $ne: req.params.id },
        que: que.toLowerCase()
    });

    if (checkExisting && checkExisting._id !== req.params.id) {
        return res.status(400).json({ error: 'Already exists.' });
    }

    const updateOne = await FAQ.findById(req.params.id);

    updateOne.que = que.toLowerCase();
    updateOne.ans = ans.toLowerCase();

    await updateOne.save();

    res.json(updateOne);
};







const Delete = async (req, res) => {
    await FAQ.findByIdAndDelete(req.params.id);

    res.send("Deleted")
};






module.exports = { FAQs, Create, View, Update, Delete }