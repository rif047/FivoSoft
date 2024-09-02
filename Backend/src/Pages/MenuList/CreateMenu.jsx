import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import axios from 'axios';
import Layout from '../../Layout';

export default function CreateMenu() {
    document.title = 'Add Menu Item';

    const [menu_name, setMenuName] = useState('');
    const [url, setUrl] = useState('');
    const [menuNameError, setMenuNameError] = useState('');
    const [urlError, setUrlError] = useState('');
    const navigate = useNavigate();

    let submit = async (e) => {
        e.preventDefault();
        setMenuNameError('');
        setUrlError('');

        if (!menu_name) {
            setMenuNameError('Menu Name cannot be empty');
            return;
        }
        if (!url) {
            setUrlError('URL cannot be empty');
            return;
        }

        try {
            await axios.post('http://fivosoft.mepfbd.com/api/menu_items/create', {
                menu_name,
                url
            });

            const successMessageUrl = new URLSearchParams({ successMessage: 'Created successfully' });
            navigate({ pathname: '/menu_list', search: successMessageUrl.toString() });

        } catch (err) {
            if (err.response.data.error.includes('Menu already exists')) {
                setMenuNameError(err.response.data.error);
            }
            if (err.response.data.error.includes('URL already exists')) {
                setUrlError(err.response.data.error);
            }
        }
    }

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

                <form className="form" onSubmit={submit}>
                    <div className="mb-4">
                        <label>Menu Name</label>
                        <input
                            type="text"
                            placeholder="Menu Name"
                            name="menu_name"
                            onChange={(e) => setMenuName(e.target.value)}
                        />
                        {menuNameError && <p className="text-red-500 ml-1 mt-1">{menuNameError}</p>}
                    </div>

                    <div className="mb-4">
                        <label>URL</label>
                        <input
                            type="text"
                            placeholder="URL"
                            name="url"
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        {urlError && <p className="text-red-500 ml-1 mt-1">{urlError}</p>}
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
