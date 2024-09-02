import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import axios from 'axios';
import Layout from '../../Layout';

export default function CreatePortfolio() {
    document.title = 'Add Portfolio';

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('')
    const [image, setImage] = useState(null);
    const [nameError, setNameError] = useState('');
    const [urlError, setUrlError] = useState('');
    const [imageError, setImageError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        let fetchCategories = async () => {
            const response = await axios.get('http://fivosoft.mepfbd.com/api/portfolio_categories');
            setCategories(response.data);
        }
        fetchCategories();

    }, []);

    let submit = async (e) => {
        e.preventDefault();
        setNameError('');
        setUrlError('');
        setImageError('');
        setCategoryError('');

        if (!name) {
            setNameError('Name is required!');
            return;
        }

        if (!url) {
            setUrlError('URL is required!');
            return;
        }

        if (!image) {
            setImageError('Image is required!');
            return;
        }

        if (!selectedCategory) {
            setCategoryError('Category is required!');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('url', url);
            formData.append('description', description);
            formData.append('category', selectedCategory);
            formData.append('image', image);

            await axios.post('http://fivosoft.mepfbd.com/api/portfolios/create', formData);

            const successMessageUrl = new URLSearchParams({ successMessage: 'Created successfully' });

            navigate({ pathname: '/portfolios', search: successMessageUrl.toString() });

        } catch (err) {
            if (err.response && err.response.data && err.response.data.error && err.response.data.error.includes('Name Already exists.')) {
                setNameError(err.response.data.error);
            }
            if (err.response && err.response.data && err.response.data.error && err.response.data.error.includes('URL Already exists.')) {
                setUrlError(err.response.data.error);
            }
        }
    }

    return (
        <Layout>
            <div className="max-w-[700px] px-2 mx-auto">
                <div className="flex justify-end mb-2">
                    <NavLink
                        to={'/portfolios'}
                        className="flex justify-center bg-[#4c5165] text-gray-300 font-bold px-5 py-1 rounded-md"
                    >
                        <span className="mr-2">Portfolios</span>
                        <ListAltOutlinedIcon />
                    </NavLink>
                </div>

                <form className="form" onSubmit={submit} encType="multipart/form-data">
                    <div className="mb-4">
                        <label>Category</label>
                        <select
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            value={selectedCategory}
                        >
                            <option value="">Select a Category</option>
                            {categories?.map((category) => (
                                <option key={category?._id} value={category?._id}>
                                    {category.category_name}
                                </option>
                            ))}
                        </select>
                        {categoryError && <p className="text-red-500 ml-1 mt-1">{categoryError}</p>}
                    </div>

                    <div className="mb-4">
                        <label>Project Name</label>
                        <input
                            type="text"
                            placeholder="Project Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && <p className="text-red-500 ml-1 mt-1">{nameError}</p>}
                    </div>

                    <div className="mb-4">
                        <label>Project URL</label>
                        <input
                            type="text"
                            placeholder="Project URL"
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        {urlError && <p className="text-red-500 ml-1 mt-1">{urlError}</p>}
                    </div>

                    <div className="mb-4">
                        <label>Project Description</label>
                        <input
                            type="text"
                            placeholder="Project Description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label>Project Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const selectedFile = e.target.files[0];
                                setImage(selectedFile);
                            }}
                        />
                        {imageError && <p className="text-red-500 ml-1 mt-1">{imageError}</p>}
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
