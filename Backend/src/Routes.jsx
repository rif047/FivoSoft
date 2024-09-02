import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";


import Login from './Pages/Login/Login';

import Dashboard from './Pages/Dashboard/Dashboard';

import MenuList from './Pages/MenuList/MenuList';
import CreateMenu from "./Pages/MenuList/CreateMenu";
import UpdateMenu from "./Pages/MenuList/UpdateMenu";

import Portfolios from './Pages/Portfolio/Portfolios';
import CreatePortfolio from './Pages/Portfolio/CreatePortfolio';
import UpdatePortfolio from './Pages/Portfolio/UpdatePortfolio';

import PortfolioCategory from './Pages/PortfolioCategory/PortfolioCategory';
import CreatePortfolioCategory from './Pages/PortfolioCategory/CreatePortfolioCategory';
import UpdatePortfolioCategory from './Pages/PortfolioCategory/UpdatePortfolioCategory';

import Faqs from './Pages/FAQ/FAQs';
import CreateFAQ from './Pages/FAQ/CreateFAQ';
import UpdateFAQ from './Pages/FAQ/UpdateFAQ';

import Users from './Pages/User/Users';
import CreateUser from './Pages/User/CreateUser';
import UpdateUser from './Pages/User/UpdateUser';



export default function AllRoutes() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setLoggedIn(true);
        }
    }, []);
    return (
        <Routes>
            <Route path="/login" element={loggedIn ? (<Navigate to="/" />) : (<Login setLoggedIn={setLoggedIn} />)} />

            <Route path="/" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} />

            <Route path="/menu_list" element={loggedIn ? <MenuList /> : <Navigate to="/login" />} />
            <Route path="/menu_list/create" element={loggedIn ? <CreateMenu /> : <Navigate to="/login" />} />
            <Route path="/menu_list/update/:menu_name" element={loggedIn ? <UpdateMenu /> : <Navigate to="/login" />} />

            <Route path="/portfolios" element={loggedIn ? <Portfolios /> : <Navigate to="/login" />} />
            <Route path="/portfolios/create" element={loggedIn ? <CreatePortfolio /> : <Navigate to="/login" />} />
            <Route path="/portfolios/update/:name" element={loggedIn ? <UpdatePortfolio /> : <Navigate to="/login" />} />

            <Route path="/portfolio_categories" element={loggedIn ? <PortfolioCategory /> : <Navigate to="/login" />} />
            <Route path="/portfolio_categories/create" element={loggedIn ? <CreatePortfolioCategory /> : <Navigate to="/login" />} />
            <Route path="/portfolio_categories/update/:category_name" element={loggedIn ? <UpdatePortfolioCategory /> : <Navigate to="/login" />} />

            <Route path="/faqs" element={loggedIn ? <Faqs /> : <Navigate to="/login" />} />
            <Route path="/faqs/create" element={loggedIn ? <CreateFAQ /> : <Navigate to="/login" />} />
            <Route path="/faqs/update/:que" element={loggedIn ? <UpdateFAQ /> : <Navigate to="/login" />} />

            <Route path="/users" element={loggedIn ? <Users /> : <Navigate to="/login" />} />
            <Route path="/users/creat" element={loggedIn ? <CreateUser /> : <Navigate to="/login" />} />
            <Route path="/users/update/:category_name" element={loggedIn ? <UpdateUser /> : <Navigate to="/login" />} />
        </Routes>
    )
}
