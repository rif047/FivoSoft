import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Layout from '../../Layout';

export default function UpdateFAQ() {
    const { que } = useParams();
    const [faq, setFaq] = useState({});
    const [queValue, setQueValue] = useState('');
    const [ansValue, setAnsValue] = useState('');
    const [queError, setQueError] = useState('');
    const [ansError, setAnsError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchFaq();
    }, []);

    const fetchFaq = async () => {
        try {
            const response = await axios.get(`http://fivosoft.mepfbd.com/api/faqs/view/${que}`);
            setFaq(response.data);
            setQueValue(response.data.que);
            setAnsValue(response.data.ans);
            document.title = `Edit- ${que}`;
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setQueError('');
        setAnsError('');

        if (!queValue) {
            setQueError('QUE Can not be empty!');
            return;
        }
        if (!ansValue) {
            setAnsError('ANS Can not be empty!');
            return;
        }

        try {
            await axios.patch(`http://fivosoft.mepfbd.com/api/faqs/update/${faq._id}`, {
                que: queValue,
                ans: ansValue,
            });

            const successMessageUrl = new URLSearchParams({ successMessage: 'Updated successfully' });

            navigate({ pathname: '/faqs', search: successMessageUrl.toString() });

        } catch (err) {
            if (err.response && err.response.data) {
                if (err.response.data.error === 'Already exists.') {
                    setQueError(err.response.data.error);
                } else {
                    console.error('Error updating:', err);
                }
            } else {
                console.log(err);
            }
        }
    };

    return (
        <Layout>
            <div className="max-w-[700px] px-2 mx-auto">
                <div className="flex justify-end mb-2">
                    <NavLink
                        to={'/faqs'}
                        className="flex justify-center bg-[#4c5165] text-gray-300 font-bold px-5 py-1 rounded-md"
                    >
                        <span className="mr-2">FAQ List</span>
                        <ListAltOutlinedIcon />
                    </NavLink>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Question</label>
                        <input
                            type="text"
                            name="que"
                            value={queValue}
                            onChange={(e) => setQueValue(e.target.value)}
                        />
                        {queError && <p className="text-red-500 ml-1 mt-1">{queError}</p>}
                    </div>

                    <div className="mb-4">
                        <label>Answer</label>
                        <input
                            type="text"
                            name="ans"
                            value={ansValue}
                            onChange={(e) => setAnsValue(e.target.value)}
                        />
                        {ansError && <p className="text-red-500 ml-1 mt-1">{ansError}</p>}
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
