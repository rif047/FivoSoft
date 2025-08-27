import Card from "../Components/Card"
import { BsWordpress } from "react-icons/bs";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Collaboration from "../Components/Collaboration";

export default function Service() {
    document.title = 'Service';
    return (
        <>
            <div className='text-[#54595F] py-10'>
                <div className='container mx-auto'>
                    <h1 className='text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-3 text-center uppercase'>Our Core <span className='text-[#fdb300]'>Services</span></h1>


                    <p className="text-justify mb-4 mt-7 px-3 text-[#9C9C9CFF]">
                        At <span className="text-2xl">FivoSoft Technology</span>, we empower businesses with cutting-edge digital solutions designed to drive growth, enhance efficiency, and create impactful user experiences. Whether you're looking to build a high-performance web platform, establish a strong brand identity, or expand your digital presence, we offer tailored, scalable, and results-driven solutions to meet your unique needs.

                        <br />
                        <br />


                        We specialize in modern web development, leveraging the latest technologies such as JavaScript, MERN stack, and Next.js to create dynamic, high-speed, and secure web applications. Our expertise ensures that every solution is optimized for seamless performance, cross-platform compatibility, and user engagement, helping businesses stay ahead in the digital landscape.

                        <br />
                        <br />


                        For those seeking a powerful content management system, our custom WordPress solutions provide the perfect balance of flexibility, scalability, and ease of use. From corporate websites to advanced eCommerce platforms, we build SEO-optimized, fast, and secure websites that enhance brand credibility and streamline digital operations.

                        <br />
                        <br />

                        E-commerce is at the heart of the modern business landscape, and we deliver feature-rich, scalable, and high-converting online stores using WooCommerce, Shopify, and custom frameworks. By integrating seamless payment gateways, inventory management, and intuitive shopping experiences, we help businesses maximize sales and customer retention.

                        <br />
                        <br />

                        We also develop enterprise-grade web applications tailored to enhance productivity, automate business processes, and optimize operational workflows. Our custom, scalable, and secure solutions empower organizations to achieve greater efficiency and long-term success in an increasingly digital world.

                        <br />
                        <br />

                        A strong brand identity is crucial in today’s competitive market. Our branding and identity design services go beyond aesthetics—we craft memorable, strategic, and market-driven brand elements that resonate with your audience. From logos to comprehensive brand guidelines, we ensure consistency and recognition across all platforms.

                        <br />
                        <br />

                        To amplify your online reach, we provide comprehensive digital marketing strategies that drive engagement and business growth. With expertise in SEO, social media marketing, PPC advertising, and content marketing, we help businesses attract, convert, and retain customers through data-driven, high-impact marketing campaigns.

                        <br />
                        <br />

                        At FivoSoft Technology, we don’t just build websites or design brands—we create powerful digital experiences that elevate businesses and deliver measurable success. Let’s collaborate to turn your digital aspirations into reality and take your brand to the next level.
                    </p>


                    <div className="block lg:grid lg:grid-cols-3 xl:w-[80%] mx-auto mt-20">
                        <Card serviceIcon={<LanguageIcon />} serviceTitle={'Full-Stack Web Solutions'} serviceDescription={'We build high-performance, scalable, and interactive web applications using JavaScript, MERN stack, and Next.js. Our solutions ensure seamless functionality, security, and optimized user experience across all platforms.'} />

                        <Card serviceIcon={<BsWordpress />} serviceTitle={'CMS & WordPress Development'} serviceDescription={'Our WordPress solutions offer custom, scalable, and SEO-friendly websites tailored to business needs. From corporate sites to advanced eCommerce platforms, we ensure optimal performance and seamless user experience.'} />

                        <Card serviceIcon={<LocalMallIcon />} serviceTitle={'E-Commerce Development'} serviceDescription={'BWe develop robust, scalable, and user-centric eCommerce platforms on WooCommerce, Shopify, and custom frameworks. Our solutions integrate secure payment gateways, inventory management, and seamless customer experiences.'} />

                        <Card serviceIcon={<SettingsApplicationsIcon />} serviceTitle={'Enterprise Web Applications'} serviceDescription={'We specialize in custom web applications designed for efficiency, security, and scalability. Leveraging modern technologies, we build solutions that enhance operations, user engagement, and business growth.'} />

                        <Card serviceIcon={<BrandingWatermarkIcon />} serviceTitle={'Branding & Identity Design'} serviceDescription={'Our branding solutions create a distinct and memorable identity for businesses. From logos to full brand identity systems, we craft visuals that resonate with target audiences and strengthen brand positioning.'} />

                        <Card serviceIcon={<StorefrontIcon />} serviceTitle={'Digital Growth & Marketing '} serviceDescription={'We provide comprehensive digital marketing strategies, including SEO, social media, PPC, and content marketing, ensuring businesses increase visibility, attract customers, and achieve sustainable growth. '} />
                    </div>
                </div>
            </div>
            <Collaboration />
        </>
    )
}
