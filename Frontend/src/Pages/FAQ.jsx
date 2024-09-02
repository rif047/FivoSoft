import { useState, useEffect } from "react";
import axios from "axios";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Collaboration from "../Components/Collaboration";

export default function FAQ() {
    document.title = 'FAQ';
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        axios.get('http://fivosoft.mepfbd.com/api/faqs').then((res) => {
            setFaqs(res.data);
        })
    }, [])

    const toggleVisibility = (index) => {
        setFaqs((prevFaqs) => {
            const updatedFaqs = prevFaqs.map((faq, i) => {
                if (i === index) {
                    return {
                        ...faq,
                        isOpen: !faq.isOpen
                    };
                } else {
                    return {
                        ...faq,
                        isOpen: false
                    };
                }
            });
            return updatedFaqs;
        });
    };



    return (
        <div>
            <div className='container mx-auto text-[#54595F] mb-10'>
                <div className='grid grid-cols-3'>
                    <div className='grid justify-center col-span-1'>
                        <img className='w-[350px]' src={'/Assets/Img/fivosoft-faq.png'} alt="FAQ" />
                    </div>
                    <div className='col-span-2'>
                        <h1 className='text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-7 mt-5 uppercase'>
                            FREQUENTLY ASKED QUESTIONS <span className='text-[#fdb300]'>(FAQ)</span>
                        </h1>

                        <div>
                            {faqs.map((faq, index) => (
                                <div className="mb-3" key={faq.que}>
                                    <h3
                                        className={`p-4 text-sm bg-[#f1f1f1] font-bold cursor-pointer hover:text-white hover:bg-[#54595F] capitalize${faq.isOpen ? 'bg-[#54595F] text-gray-400' : ''}`}
                                        onClick={() => toggleVisibility(index)}
                                    >
                                        <AddCircleRoundedIcon className="mr-2" />
                                        {faq.que}
                                    </h3>
                                    {faq.isOpen && <p className="p-3 border border-gray-400">{faq.ans}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Collaboration />
        </div>
    )
}
