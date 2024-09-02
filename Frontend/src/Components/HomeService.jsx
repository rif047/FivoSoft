import Card from "./Card"
import { BsWordpress } from "react-icons/bs";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import StorefrontIcon from '@mui/icons-material/Storefront';


export default function HomeService() {
    return (
        <div className='text-[#54595F] py-10'>
            <div className='container mx-auto'>
                <h1 className='text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-3 text-center uppercase'>Our Core <span className='text-[#fdb300]'>Services</span></h1>
                <p className="text-center mb-4 text-[#9C9C9CFF]">Some Special Services Where We Expert</p>
                <div className="block lg:grid lg:grid-cols-3 xl:w-[80%] mx-auto">
                    <Card serviceIcon={<LanguageIcon />} serviceTitle={'Web Development '} serviceDescription={' Professionally a website can be developed from us. For larger organizations, companies, hospitals, and institutions, a designed website can be developed with a better interface with the highest security. '} />
                    <Card serviceIcon={<BsWordpress />} serviceTitle={'WordPress Development '} serviceDescription={'WordPress is one of the best CMS platforms for custom design — the options are endless! Your web designer will be able to customize everything from your navigation bar placement to your page background.'} />
                    <Card serviceIcon={<LocalMallIcon />} serviceTitle={'E-Commerce Solution '} serviceDescription={'For developing your online shop to the daily maintenance activities, we will provide you the best E-commerce solution with customized features to fulfill your requirements.'} />
                    <Card serviceIcon={<SettingsApplicationsIcon />} serviceTitle={'Web Application Development '} serviceDescription={'We develop a web application after selecting the best ideas for the project. When the idea seemed special and unique to us, we started to prefer its design and making.'} />
                    <Card serviceIcon={<LogoDevIcon />} serviceTitle={'Logo & Identity Design'} serviceDescription={'We collectively integrate the culture, vision, emotion and character of your brand into the identity which inspires your audience into becoming loyal ambassadors.'} />
                    <Card serviceIcon={<StorefrontIcon />} serviceTitle={'Digital Marketing '} serviceDescription={'We are expert on digital marketing in all types of Social Media like Facebook, Twitter, LinkedIn, Google Ad words and many more. '} />
                </div>
            </div>
        </div>
    )
}
