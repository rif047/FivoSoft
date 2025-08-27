const express = require("express");
const Route = express.Router();
const { Portfolios, Create, View, Update, Delete, uploadImg } = require('./Portfolio_Controller')

Route.get('/', Portfolios);
Route.post('/create', uploadImg.single('image'), Create);
Route.get('/view/:name', View);
Route.patch('/update/:id', uploadImg.single('image'), Update);
Route.delete('/destroy/:id', Delete);


module.exports = Route