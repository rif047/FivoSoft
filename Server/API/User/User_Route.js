const express = require("express");
const Route = express.Router();
const { Users, Create, View, Update, Delete } = require('./User_Controller')

Route.get('/', Users);
Route.post('/create', Create);
Route.get('/view/:username', View);
Route.patch('/update/:id', Update);
Route.delete('/delete/:id', Delete);


module.exports = Route