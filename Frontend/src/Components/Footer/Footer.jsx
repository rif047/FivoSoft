import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='bg-slate-900 text-[#90959B]'>
            <section className='lg:grid grid-cols-6 container mx-auto justify-items-center py-10 px-2 md:px-0'>
                <div className="col-span-2">
                    <h1 className='text-3xl font-Montserrat-Bold mb-3'>FivoSoft <span className='text-[#d19a2b]'>Technology</span></h1>
                    <p>
                        FivoSoft is your digital transformation partner. We optimize your products and assets by sharing our expertise and passion for the digital scenes.
                    </p>
                    <p className="mt-10 text-slate-400 mb-10 lg:mb-0 ">Copyright © {currentYear} <NavLink className={'text-slate-300'} to={'/'}>FivoSoft Technology</NavLink> | All Rights Reserved.</p>
                </div>

                <div className="col-span-2  mb-10 lg:mb-0">
                    <div className="mb-6">
                        <h3 className="text-2xl font-Montserrat-Bold mb-2 ">Email Us <RemoveIcon /></h3>
                        <NavLink to={'mailto:fivosoft.it@gmail.com'}>fivosoft.it@gmail.com</NavLink>
                        <br />
                        <NavLink to={'mailto:info@fivosoft.com'}>info@fivosoft.com</NavLink>
                    </div>

                    <div>
                        <h3 className="text-2xl font-Montserrat-Bold mb-2">Social Links <RemoveIcon /></h3>
                        <NavLink><FacebookIcon /></NavLink>
                    </div>
                </div>
                <div className="flex flex-col gap-2  mb-4 lg:mb-0">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/service'}>Services</NavLink>
                    <NavLink to={'/portfolios'}>Portfolio</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                </div>
                <div className="flex flex-col gap-2">
                    <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
                    <NavLink to={'/terms-condition'}>Terms & Conditions</NavLink>
                    <NavLink to={'/faq'}>FAQ</NavLink>
                </div>
            </section>
        </footer>
    )
}
