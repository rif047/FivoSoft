import Card from "../Components/Card"
import { BsWordpress } from "react-icons/bs";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Collaboration from "../Components/Collaboration";

export default function Service() {
    document.title = 'Service';
    return (
        <>
            <div className='text-[#54595F] py-10'>
                <div className='container mx-auto'>
                    <h1 className='text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-3 text-center uppercase'>Our Core <span className='text-[#fdb300]'>Services</span></h1>
                    <div className="block lg:grid lg:grid-cols-3 xl:w-[80%] mx-auto">
                        <Card serviceIcon={<LanguageIcon />} serviceTitle={'Web Development '} serviceDescription={' Professionally a website can be developed from us. For larger organizations, companies, hospitals, and institutions, a designed website can be developed with a better interface with the highest security. '} />
                        <Card serviceIcon={<BsWordpress />} serviceTitle={'WordPress Development '} serviceDescription={'WordPress is one of the best CMS platforms for custom design — the options are endless! Your web designer will be able to customize everything from your navigation bar placement to your page background.'} />
                        <Card serviceIcon={<LocalMallIcon />} serviceTitle={'E-Commerce Solution '} serviceDescription={'For developing your online shop to the daily maintenance activities, we will provide you the best E-commerce solution with customized features to fulfill your requirements.'} />
                        <Card serviceIcon={<SettingsApplicationsIcon />} serviceTitle={'Web Application Development '} serviceDescription={'We develop a web application after selecting the best ideas for the project. When the idea seemed special and unique to us, we started to prefer its design and making.'} />
                        <Card serviceIcon={<LogoDevIcon />} serviceTitle={'Logo & Identity Design'} serviceDescription={'We collectively integrate the culture, vision, emotion and character of your brand into the identity which inspires your audience into becoming loyal ambassadors.'} />
                        <Card serviceIcon={<StorefrontIcon />} serviceTitle={'Digital Marketing '} serviceDescription={'We are expert on digital marketing in all types of Social Media like Facebook, Twitter, LinkedIn, Google Ad words and many more. '} />
                    </div>

                    <p className="text-justify mb-4 mt-7 px-3 text-[#9C9C9CFF]">
                        <span className="text-2xl">Our</span> web development services cater to businesses and individuals seeking to establish a strong online presence. With our team of skilled developers and designers, we create visually appealing, functional, and user-friendly websites tailored to meet your specific needs. Whether you require a simple informational website or a complex web application, we have the expertise to bring your vision to life. Our web development services include front-end and back-end development, ensuring that your website not only looks great but also performs optimally. We focus on responsive design, ensuring that your website is accessible and visually appealing across various devices. With regular updates and maintenance, we ensure that your website remains secure, up to date, and aligned with the latest web standards.

                        <br />
                        <br />


                        In the ever-expanding digital marketplace, our ecommerce development services empower businesses to thrive online. We specialize in creating secure and scalable online stores that enable you to sell your products and services effectively. Our experienced developers work with leading ecommerce platforms like Magento, Shopify, or WooCommerce to build customized solutions tailored to your business requirements. We integrate essential features such as product catalogs, shopping carts, secure payment gateways, inventory management systems, and order tracking. Our focus is on delivering a seamless and user-friendly shopping experience that boosts conversions and drives revenue. With our ecommerce development services, you can expand your reach, engage customers, and maximize your online business potential.

                        <br />
                        <br />


                        Our web application development services offer innovative solutions to cater to your unique business needs. Whether you require a customer portal, project management system, or social networking platform, our team of skilled developers can create dynamic and interactive web applications to meet your objectives. We leverage cutting-edge technologies and frameworks such as React, Angular, or Django to build robust and scalable web applications. Our focus is on crafting intuitive user interfaces, efficient data processing, and seamless user interactions. With our web application development services, you can enhance productivity, streamline processes, and provide valuable tools and services to your users. We prioritize performance, security, and user experience to ensure that your web application exceeds expectations.

                        <br />
                        <br />

                        Note: Remember to customize the service descriptions to align with your specific offerings and value proposition.</p>
                </div>
            </div>
            <Collaboration />
        </>
    )
}
