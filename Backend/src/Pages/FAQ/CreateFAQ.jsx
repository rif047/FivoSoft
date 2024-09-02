import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Layout from '../../Layout';
import axios from 'axios';

export default function CreateFAQ() {
    document.title = 'Add FAQ';

    const [que, setQue] = useState('');
    const [ans, setAns] = useState('');
    const [queError, setQueError] = useState('');
    const [ansError, setAnsError] = useState('');
    const navigate = useNavigate();

    let submit = async (e) => {
        e.preventDefault();
        setQueError('');

        if (!que) {
            setQueError('QUE Can not be empty!');
            return;
        }
        if (!ans) {
            setAnsError('ANS Can not be empty!');
            return;
        }

        try {
            await axios.post('http://fivosoft.mepfbd.com/api/faqs/create', {
                que,
                ans
            });

            const successMessageUrl = new URLSearchParams({ successMessage: 'Created successfully' });
            navigate({ pathname: '/faqs', search: successMessageUrl.toString() });

        } catch (err) {
            if (err.response && err.response.data && err.response.data.error && err.response.data.error.includes('Already exists.')) {
                setQueError(err.response.data.error);
            }
        }
    }


    return (
        <Layout>
            <div className="max-w-[700px] px-2 mx-auto">
                <div className="flex justify-end mb-2">
                    <NavLink
                        to={'/faqs'}
                        className="flex justify-center bg-[#4c5165] text-gray-300 font-bold px-5 py-1 rounded-md"
                    >
                        <span className="mr-2">All FAQ</span>
                        <ListAltOutlinedIcon />
                    </NavLink>
                </div>

                <form className="form" onSubmit={submit}>
                    <div className="mb-4">
                        <label>Question</label>
                        <input
                            type="text"
                            placeholder="Question"
                            onChange={(e) => setQue(e.target.value)}
                        />
                        {queError && <p className="text-red-500 ml-1 mt-1">{queError}</p>}
                    </div>

                    <div className="mb-4">
                        <label>Answer</label>
                        <input
                            type="text"
                            placeholder="Answer"
                            onChange={(e) => setAns(e.target.value)}
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
