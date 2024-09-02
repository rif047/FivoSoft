import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Layout from '../../Layout';

export default function UpdateMenu() {
    const { menu_name } = useParams();
    const [menu, setMenu] = useState({});
    const [menuName, setMenuName] = useState('');
    const [url, setUrl] = useState('');
    const [menuNameError, setMenuNameError] = useState('');
    const [urlError, setUrlError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchMenuItem();
    }, []);

    const fetchMenuItem = async () => {
        try {
            const response = await axios.get(`http://fivosoft.mepfbd.com/api/menu_items/view/${menu_name}`);
            setMenu(response.data);
            setMenuName(response.data.menu_name);
            setUrl(response.data.url);
            document.title = `Edit- ${menu_name}`;
        } catch (error) {
            console.error('Error fetching menu item:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMenuNameError('');
        setUrlError('');

        if (!menuName) {
            setMenuNameError('Menu Name cannot be empty');
            return;
        }
        if (!url) {
            setUrlError('URL cannot be empty');
            return;
        }

        try {
            await axios.patch(`http://fivosoft.mepfbd.com/api/menu_items/update/${menu._id}`, {
                menu_name: menuName,
                url: url
            });

            const successMessageUrl = new URLSearchParams({ successMessage: 'Updated successfully' });
            navigate({ pathname: '/menu_list', search: successMessageUrl.toString() });
        } catch (err) {
            if (err.response && err.response.data) {
                if (err.response.data.error === 'Menu name already exists.') {
                    setMenuNameError(err.response.data.error);
                    setUrlError('');
                } else if (err.response.data.error === 'URL already exists.') {
                    setUrlError(err.response.data.error);
                    setMenuNameError('');
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
            <div>
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
                                name="menu_name"
                                value={menuName}
                                onChange={(e) => setMenuName(e.target.value)}
                            />
                            {menuNameError && <p className="text-red-500 ml-1 mt-1">{menuNameError}</p>}
                        </div>

                        <div className="mb-4">
                            <label>URL</label>
                            <input
                                type="text"
                                name="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            {urlError && <p className="text-red-500 ml-1 mt-1">{urlError}</p>}
                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
