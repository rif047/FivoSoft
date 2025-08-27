const express = require("express");
const Route = express.Router();
const Menu_Item = require('./API/Menu_Item/MenuItem_Route');
const PortfolioCategory = require('./API/Portfolio_Category/PortfolioCategory_Route');
const Portfolio = require('./API/Portfolio/Portfolio_Route');
const Faq = require('./API/FAQ/FAQ_Route');
const User = require('./API/User/User_Route');
const Auth = require('./API/Auth/Auth');



Route.use('/auth', Auth);
Route.use('/menu_items', Menu_Item);
Route.use('/portfolio_categories', PortfolioCategory);
Route.use('/portfolios', Portfolio);
Route.use('/faqs', Faq);
Route.use('/users', User);


module.exports = Route