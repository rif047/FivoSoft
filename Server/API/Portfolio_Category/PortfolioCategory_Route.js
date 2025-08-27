const express = require("express");
const Route = express.Router();
const { Categories, Create, View, Update, Delete } = require('./PortfolioCategory_Controller')

Route.get('/', Categories);
Route.post('/create', Create);
Route.get('/view/:category_name', View);
Route.patch('/update/:id', Update);
Route.delete('/destroy/:id', Delete);


module.exports = Route