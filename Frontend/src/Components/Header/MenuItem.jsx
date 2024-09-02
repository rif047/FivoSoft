import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function MenuItem() {
    const [navMenus, setNavMenus] = useState([]);

    useEffect(() => {
        axios.get('http://fivosoft.mepfbd.com/api/menu_items').then((res) => {
            setNavMenus(res.data);
        })
    }, []);


    return (
        <>
            {
                navMenus?.map((navMenu) => {
                    return (
                        <NavLink to={navMenu.url.toLowerCase()} className={({ isActive }) => (isActive ? "flex items-center text-sm capitalize px-1 activeLink" : "flex items-center text-sm capitalize px-1 hover:text-white")} key={navMenu.menu_name}>
                            {navMenu.menu_name}
                        </NavLink>

                    )
                })
            }
        </>
    )
}
