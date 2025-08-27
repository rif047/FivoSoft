import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";



export default function Navbar() {
    let [showHide, setShowHide] = useState(false);
    return (
        <>
            <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none bg-slate-900 bg-opacity-90 px-4 shadow-md backdrop-blur-2xl backdrop-saturate-200 text-slate-300 font-bold">

                {/* Desktop Menu */}
                <div className="flex items-center font-bold container container-2xl mx-auto ">
                    <NavLink to="/" > <img className="w-[60px] py-2" src={'./Assets/Img/New FS White.png'} alt="Bikers Clan" /> </NavLink>

                    <ul className="ml-auto mr-8 hidden items-center gap-3 lg:flex">
                        <MenuItem />
                    </ul>

                    <NavLink to="/contact"
                        className="middle none center hidden rounded-lg bg-gradient-to-tr from-slate-600 to-slate-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-slate-500/20 transition-all hover:shadow-lg hover:shadow-slate-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    >
                        Project Proposal
                    </NavLink>

                    <button className="ml-auto h-6 lg:hidden" onClick={() => { setShowHide(!showHide) }}> <MenuIcon /> </button>
                </div>



                {/* Mobile Menu */}
                <div className={showHide ? 'border-t-[1px] border-slate-600 text-center lg:hidden' : 'border-t-[1px] border-slate-600 text-center hidden'}>
                    <ul className="mt-2 mb-4 flex flex-col gap-4 pb-2 items-center">

                        <MenuItem />

                        <NavLink to="/contact"
                            className="text-center m-2 block w-full rounded-lg bg-gradient-to-tr from-slate-600 to-slate-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-slate-500/20 transition-all hover:shadow-lg hover:shadow-slate-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            Project Proposal
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}
