import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Layout from '../../Layout';
import axios from 'axios';

export default function CreatePortfolioCategory() {
    document.title = 'Add Portfolio Category';

    const [category_name, setCategoryName] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const navigate = useNavigate();

    let submit = async (e) => {
        e.preventDefault();
        setCategoryError('');

        if (!category_name) {
            setCategoryError('Can not be empty!');
            return;
        }

        try {
            await axios.post('http://fivosoft.mepfbd.com/api/portfolio_categories/create', {
                category_name,
            });

            const successMessageUrl = new URLSearchParams({ successMessage: 'Created successfully' });
            navigate({ pathname: '/portfolio_categories', search: successMessageUrl.toString() });

        } catch (err) {
            if (err.response && err.response.data && err.response.data.error && err.response.data.error.includes('Already exists.')) {
                setCategoryError(err.response.data.error);
            }
        }
    }


    return (
        <Layout>
            <div className="max-w-[700px] px-2 mx-auto">
                <div className="flex justify-end mb-2">
                    <NavLink
                        to={'/portfolio_categories'}
                        className="flex justify-center bg-[#4c5165] text-gray-300 font-bold px-5 py-1 rounded-md"
                    >
                        <span className="mr-2">Categories</span>
                        <ListAltOutlinedIcon />
                    </NavLink>
                </div>

                <form className="form" onSubmit={submit}>
                    <div className="mb-4">
                        <label>Category Name</label>
                        <input
                            type="text"
                            placeholder="Menu Name"
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                        {categoryError && <p className="text-red-500 ml-1 mt-1">{categoryError}</p>}
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
