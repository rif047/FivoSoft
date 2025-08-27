import Card from "./Card"
import { BsWordpress } from "react-icons/bs";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import StorefrontIcon from '@mui/icons-material/Storefront';


export default function HomeService() {
    return (
        <div className='text-[#54595F] py-10'>
            <div className='container mx-auto'>
                <h1 className='text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-3 text-center uppercase'>Our Core <span className='text-[#fdb300]'>Services</span></h1>
                <p className="text-center mb-4 text-[#9C9C9CFF]">Some Special Services Where We Expert</p>
                <div className="block lg:grid lg:grid-cols-3 xl:w-[80%] mx-auto">
                    <Card serviceIcon={<LanguageIcon />} serviceTitle={'Full-Stack Web Solutions'} serviceDescription={'We build high-performance, scalable, and interactive web applications using JavaScript, MERN stack, and Next.js. Our solutions ensure seamless functionality, security, and optimized user experience across all platforms.'} />

                    <Card serviceIcon={<BsWordpress />} serviceTitle={'CMS & WordPress Development'} serviceDescription={'Our WordPress solutions offer custom, scalable, and SEO-friendly websites tailored to business needs. From corporate sites to advanced eCommerce platforms, we ensure optimal performance and seamless user experience.'} />

                    <Card serviceIcon={<LocalMallIcon />} serviceTitle={'E-Commerce Development'} serviceDescription={'BWe develop robust, scalable, and user-centric eCommerce platforms on WooCommerce, Shopify, and custom frameworks. Our solutions integrate secure payment gateways, inventory management, and seamless customer experiences.'} />

                    <Card serviceIcon={<SettingsApplicationsIcon />} serviceTitle={'Enterprise Web Applications'} serviceDescription={'We specialize in custom web applications designed for efficiency, security, and scalability. Leveraging modern technologies, we build solutions that enhance operations, user engagement, and business growth.'} />

                    <Card serviceIcon={<BrandingWatermarkIcon />} serviceTitle={'Branding & Identity Design'} serviceDescription={'Our branding solutions create a distinct and memorable identity for businesses. From logos to full brand identity systems, we craft visuals that resonate with target audiences and strengthen brand positioning.'} />

                    <Card serviceIcon={<StorefrontIcon />} serviceTitle={'Digital Growth & Marketing '} serviceDescription={'We provide comprehensive digital marketing strategies, including SEO, social media, PPC, and content marketing, ensuring businesses increase visibility, attract customers, and achieve sustainable growth. '} />
                </div>
            </div>
        </div>
    )
}
