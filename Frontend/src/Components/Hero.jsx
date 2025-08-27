import { NavLink } from "react-router-dom";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import WaveyAnimation from "./WaveyAnimation";


export default function Hero() {
    return (
        <>
            <div className="px-6 py-12 pb-16 text-center md:px-12 lg:text-left bg-gradient-to-b from-slate-800 text-[#2D3238]">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                    <div className="grid items-center lg:grid-cols-2">
                        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                            <div
                                className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                                <h1 className="mt-2 mb-4 text-3xl font-Montserrat-Bold tracking-tight xl:text-4xl font-bold">
                                    <WaveyAnimation />
                                </h1>
                                <p className='mb-12'>
                                    Web & Software Development With 40% Less Expense & 2x More Commitment
                                </p>

                                <NavLink to={'/service'} className="mb-2 md:mr-3 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase shadow-[0_4px_9px_-4px_#3b71ca]">Service <ArrowForwardRoundedIcon />
                                </NavLink>

                                <NavLink to={'/portfolios'} className="mb-2 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase shadow-[0_4px_9px_-4px_#3b71ca]">Website Demo <ArrowForwardRoundedIcon /></NavLink>
                            </div>
                        </div>
                        <div className="md:mb-12 lg:mb-0">
                            <img src={'/Assets/Img/Hero Image.jpg'} className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="FivoSoft Technology" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
