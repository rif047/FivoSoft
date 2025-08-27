const express = require("express");
const Route = express.Router();
const { FAQs, Create, View, Update, Delete } = require('./FAQ_Controller')

Route.get('/', FAQs);
Route.post('/create', Create);
Route.get('/view/:que', View);
Route.patch('/update/:id', Update);
Route.delete('/delete/:id', Delete);


module.exports = Route