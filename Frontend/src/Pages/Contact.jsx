import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
    document.title = 'Contact';
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wwlcj6t', 'template_ijs6aci', form.current, 'QDPF9DxR-XyFbM95k')
            .then((result) => {
                console.log(result.text);
                alert("Form Submit successfully!");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-2 mt-3 text-center uppercase'>CONTACT <span className='text-[#fdb300]'>US</span></h1>
            <p className="text-[#9C9C9CFF] px-3 text-center mb-8">
                Connecting with Us, Your Path to Solutions!
            </p>
            <form ref={form} onSubmit={sendEmail} className='text-center [&>p]:w-[320px] md:w-[500px] mx-auto [&>*]:w-[300px] [&>*]:md:w-[480px] [&>*]:rounded-lg [&>*]:bg-slate-100 [&>*]:p-3 [&>*]:mb-5'>
                <input type="text" name='name' placeholder='Enter Name:' required />
                <input type="email" name='email' placeholder='Enter Email:' required />
                <input type="text" name='number' placeholder='Whats App Number:' required />
                <input type="text" name='address' placeholder=' Address:' required />
                <input type="text" name='businessName' placeholder='Business Name:' />
                <div className='[&>*]:py-2 text-center mx-auto'>
                    <h3 className='text-lg text-slate-700 font-bold py-3'>Project Type:*</h3>
                    <div>
                        <input type="checkbox" name="customWebSolutions" value="Custom Web Solutions" className='mr-2' />
                        <label className='text-slate-500'>Custom Web Solutions</label>
                    </div>
                    <div>
                        <input type="checkbox" name="cmsWordPressDevelopment" value="CMS & WordPress Development" className='mr-2' />
                        <label className='text-slate-500'>CMS & WordPress Development</label>
                    </div>
                    <div>
                        <input type="checkbox" name="eCommerceDevelopment" value="E-Commerce Development" className='mr-2' />
                        <label className='text-slate-500'>E-Commerce Development</label>
                    </div>
                    <div>
                        <input type="checkbox" name="enterpriseWebApplications" value="Enterprise Web Applications" className='mr-2' />
                        <label className='text-slate-500'>Enterprise Web Applications</label>
                    </div>
                    <div>
                        <input type="checkbox" name="brandingIdentityDesign" value="Branding & Identity Design" className='mr-2' />
                        <label className='text-slate-500'>Branding & Identity Design</label>
                    </div>
                    <div>
                        <input type="checkbox" name="digitalGrowthMarketing" value="Digital Growth & Marketing" className='mr-2' />
                        <label className='text-slate-500'>Digital Growth & Marketing</label>
                    </div>
                    <div>
                        <input type="checkbox" name="others" value="Others" className='mr-2' />
                        <label className='text-slate-500'>Others</label>
                    </div>
                </div>



                <div className='[&>*]:py-2 mx-auto text-center'>
                    <h3 className='text-lg text-slate-700 font-bold py-3'>Budget in USD:*</h3>
                    <div>
                        <input type="checkbox" name="less100" value="Less than $100" className='mr-2' />
                        <label className='text-slate-500'>Less than $100</label>
                    </div>
                    <div>
                        <input type="checkbox" name="100-500" value="$100 - $500" className='mr-2' />
                        <label className='text-slate-500'>$100 - $500</label>
                    </div>
                    <div>
                        <input type="checkbox" name="grater500" value="$500+" className='mr-2' />
                        <label className='text-slate-500'>$500+</label>
                    </div>
                </div>

                <h3 className='text-lg text-slate-700 font-bold py-3 inline'>Project Brief:*</h3>
                <textarea name="description" rows="4" cols="40" required />

                <input type="submit" value="Send" className='cursor-pointer font-bold !bg-[#fdb300]' />
            </form>
        </div>
    )
}
