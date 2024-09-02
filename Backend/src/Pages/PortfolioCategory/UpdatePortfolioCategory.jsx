import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Layout from '../../Layout';

export default function UpdatePortfolioCategory() {
    const { category_name } = useParams();
    const [category, setCategory] = useState({});
    const [menuNameValue, setMenuNameValue] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchMenuItem();
    }, []);

    const fetchMenuItem = async () => {
        try {
            const response = await axios.get(`http://fivosoft.mepfbd.com/api/portfolio_categories/view/${category_name}`);
            setCategory(response.data);
            setMenuNameValue(response.data.category_name);
            document.title = `Edit- ${category_name}`;
        } catch (error) {
            console.error('Error fetching menu item:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCategoryError('');

        if (!menuNameValue) {
            setCategoryError('Can not be empty!');
            return;
        }

        try {
            await axios.patch(`http://fivosoft.mepfbd.com/api/portfolio_categories/update/${category._id}`, {
                category_name: menuNameValue
            });

            const successMessageUrl = new URLSearchParams({ successMessage: 'Updated successfully' });

            navigate({ pathname: '/portfolio_categories', search: successMessageUrl.toString() });

        } catch (err) {
            if (err.response && err.response.data) {
                if (err.response.data.error === 'Already exists.') {
                    setCategoryError(err.response.data.error);
                } else {
                    console.error('Error updating menu item:', err);
                }
            } else {
                console.error('Error updating menu item:', err);
            }
        }
    };

    return (
        <Layout>
            <div className="max-w-[700px] px-2 mx-auto">
                <div className="flex justify-end mb-2">
                    <NavLink
                        to={'/menu_list'}
                        className="flex justify-center bg-[#4c5165] text-gray-300 font-bold px-5 py-1 rounded-md"
                    >
                        <span className="mr-2">MENU LIST</span>
                        <ListAltOutlinedIcon />
                    </NavLink>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Menu Name</label>
                        <input
                            type="text"
                            name="category_name"
                            value={menuNameValue}
                            onChange={(e) => setMenuNameValue(e.target.value)}
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
