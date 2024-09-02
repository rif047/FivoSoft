import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ListIcon from '@mui/icons-material/List';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function MenuItem() {
    return (
        <div className="mx-4 my-4">
            <div className="flex items-center mb-10">
                <img src={'/Assets/Img/New FS.png'} alt="" className="w-[45px] mr-2 rounded-md" />
                <div className="text-sm">
                    <p className="font-bold">FivoSoft Technology</p>
                    <p>Your Next IT Partner</p>
                </div>
            </div>
            <nav>
                <NavLink to={'/'} className="flex items-center my-2 px-2 py-2  hover:bg-[#A0A5B9] hover:rounded-md"><DashboardOutlinedIcon /><p className="ml-2">Dashboard</p></NavLink>
                <NavLink to={'/menu_list'} className="flex items-center my-2 px-2 py-2 hover:bg-[#A0A5B9] hover:rounded-md"><ListIcon /><p className="ml-2">Menu List</p></NavLink>
                <NavLink to={'/portfolios'} className="flex items-center my-2 px-2 py-2 hover:bg-[#A0A5B9] hover:rounded-md"><WorkOutlineOutlinedIcon /><p className="ml-2">Portfolio</p></NavLink>
                <NavLink to={'/portfolio_categories'} className="flex items-center my-2 px-2 py-2 hover:bg-[#A0A5B9] hover:rounded-md"><WorkOutlineOutlinedIcon /><p className="ml-2">Portfolio Category</p></NavLink>
                <NavLink to={'/faqs'} className="flex items-center my-2 px-2 py-2 hover:bg-[#A0A5B9] hover:rounded-md"><HelpOutlineOutlinedIcon /><p className="ml-2">FAQ</p></NavLink>
                <NavLink to={'/users'} className="flex items-center my-2 px-2 py-2 hover:bg-[#A0A5B9] hover:rounded-md"><PersonOutlineIcon /><p className="ml-2">User</p></NavLink>
            </nav>

        </div>
    )
}
