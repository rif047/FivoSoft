import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Portfolio() {
    document.title = 'Portfolio';
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        axios.get('http://fivosoft.mepfbd.com/api/portfolios').then((res) => {
            setPortfolios(res.data);
        });

    }, []);

    return (
        <section className="py-10 bg-gradient-to-b from-slate-100">
            <div className="container mx-auto px-2">
                <h1 className="text-[#54595F] text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-3 text-center uppercase">
                    Our <span className="text-[#fdb300]">Recent Projects</span>
                </h1>
                <p className="text-center mb-20 text-black">Some of our recent projects</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {portfolios?.map((portfolio) => (
                        <NavLink
                            to={portfolio.url}
                            key={portfolio._id}
                            target="_blank"
                        >
                            <div className="relative shadow-xl hover:shadow-2xl">
                                <img
                                    className="w-full h-[1000px]"
                                    src={`http://fivosoft.mepfbd.com/Images/Portfolio/${portfolio.image}`}
                                    alt={portfolio.name}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                                    <p className="text-white uppercase text-xl font-bold">{portfolio.name}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
}
