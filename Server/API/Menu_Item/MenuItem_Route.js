const express = require("express");
const Route = express.Router();
const { Menus, Create, View, Update, Delete } = require('./MenuItem_Controller')

Route.get('/', Menus);
Route.post('/create', Create);
Route.get('/view/:menu_name', View);
Route.patch('/update/:_id', Update);
Route.delete('/destroy/:_id', Delete);


module.exports = Route