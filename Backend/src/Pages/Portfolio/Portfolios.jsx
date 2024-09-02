import axios from "axios";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import Layout from '../../Layout';

export default function Portfolio() {
    document.title = 'Portfolios';

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const [portfolios, setPortfolio] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetchData();

        const successMessage = new URLSearchParams(window.location.search).get('successMessage');
        if (successMessage) {
            setSuccessMessage(successMessage);
            setTimeout(() => setSuccessMessage(''), 2000);
            window.history.replaceState({}, document.title, window.location.href.split('?')[0]);
        }
    }, []);


    const fetchData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolios`);
        setPortfolio(response.data);
    };




    const handleDelete = async (id) => {
        const shouldDelete = window.confirm("Are you sure..?");

        if (shouldDelete) {
            await axios.delete(`http://fivosoft.mepfbd.com/api/portfolios/destroy/${id}`);
            fetchData();
            setSuccessMessage('Deleted successfully');

            setTimeout(() => {
                setSuccessMessage('');
            }, 1000);
        }
    };

    const successMessageClassName = successMessage.includes('Deleted successfully') ?
        "bg-red-100 border-t-4 border-red-500 rounded-sm text-red-900 px-6 py-1 mt-[-10px] shadow-md font-bold absolute animate-fade-left"
        :
        "bg-teal-100 border-t-4 border-teal-500 rounded-sm text-teal-900 px-6 py-1 mt-[-10px] shadow-md font-bold absolute animate-fade-left";



    return (
        <Layout>
            {successMessage && (
                <p className={successMessageClassName}>
                    {successMessage} <DoneOutlinedIcon />
                </p>
            )}
            <div className="flex justify-end">
                <NavLink to={'/portfolios/create'} className="flex justify-center bg-[#4c5165] text-gray-300 font-bold px-5 py-1 rounded-md mb-2">
                    NEW
                    <AddOutlinedIcon />
                </NavLink>
            </div>
            <table className="w-full text-sm text-left text-gray-500 shadow-md rounded-lg">
                <thead className="text-xs text-gray-900 uppercase bg-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-4">
                            Project Name
                        </th>
                        <th scope="col" className="px-4 py-4">
                            Category
                        </th>
                        <th scope="col" className="px-4 py-4">
                            URL
                        </th>
                        <th scope="col" className="px-4 py-4">
                            Description
                        </th>
                        <th scope="col" className="px-4 py-4 text-center">
                            Image
                        </th>
                        <th scope="col" className="px-4 py-4 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        portfolios?.map((portfolio) => {
                            return (
                                <tr key={portfolio._id} className="bg-white border-b hover:bg-gray-100">
                                    <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                                        {capitalizeFirst(portfolio.name)}
                                    </th>
                                    <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                                        {capitalizeFirst(portfolio.category.category_name)}
                                    </th>
                                    <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                                        {portfolio.url}
                                    </th>
                                    <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                                        {portfolio.description}
                                    </th>
                                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 flex justify-center">
                                        <img src={`http://fivosoft.mepfbd.com/Images/Portfolio/${portfolio.image}`} alt={portfolio.name} className="w-[70px] h-[50px] rounded-md shadow-lg" />
                                    </th>
                                    <td className="px-4 py-3 text-center">
                                        <NavLink
                                            to={`/portfolios/update/${portfolio.name}`}
                                            className="mr-3 [&>svg]:text-yellow-400"
                                        >
                                            <EditOutlinedIcon />
                                        </NavLink>
                                        <button onClick={() => handleDelete(portfolio._id)} className="[&>svg]:text-red-400"><DeleteOutlineOutlinedIcon /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </Layout>
    )
}
