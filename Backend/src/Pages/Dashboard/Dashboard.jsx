import axios from "axios";
import { useState, useEffect } from "react";
import Layout from '../../Layout';
import { NavLink } from "react-router-dom";

export default function Dashboard() {
    document.title = 'Dashboard';

    const [portfolios, setPortfolio] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://fivosoft.mepfbd.com/api/portfolios');
            setPortfolio(response.data);
        };
        fetchData();
    }, []);



    return (
        <Layout>
            <h1 className="tracking-[.2em] text-center font-bold text-md md:text-xl uppercase mb-8">
                Recent Portfolios
            </h1>
            <div className='px-6 md:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 [&>*]:rounded-xl [&>*]:shadow-xl'>
                {
                    portfolios?.map((portfolio) => {
                        return (
                            <NavLink key={portfolio._id} to={portfolio.url} target="_blank">
                                <img src={`http://fivosoft.mepfbd.com/Images/Portfolio/${portfolio.image}`} alt={portfolio.name} className="w-full h-[450px] rounded-md hover:shadow-2xl" />
                            </NavLink>
                        )
                    })
                }

            </div>
        </Layout>
    )
}
