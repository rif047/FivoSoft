import Collaboration from "../Components/Collaboration";

export default function About() {
    document.title = 'About';
    return (
        <div className=" bg-gradient-to-b from-slate-100 pt-8">
            <div className="container mx-auto text-[#54595F] lg:px-10">
                <h1 className='text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-7 text-center uppercase'>ABOUT <span className='text-[#fdb300]'>FIVOSOFT</span></h1>
                <p className="text-[#9C9C9CFF] px-3">
                    FivoSoft is your digital transformation partner. We optimize your products and assets by sharing our expertise and passion for the digital scenes. We believe in customer satisfaction and deliver the finest tuned web based solutions to its clients.
                </p>
                <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                    <div>
                        <p className="text-left mb-4 text-[#9C9C9CFF] px-3">
                            <br />
                            <br />
                            Our team works to ensure the highest quality work to our customers. We give our services to improve process, increase profit, reduce cost and reduce headache and investment of our customers. We are committed to provide world-class web based satisfactory, quality solution to our customers and help to build a modern web based global infrastructure..
                            <br />
                            <br />

                            FivoSoft are offering you some great IT services to grow your plans & business. Our first priority is quality rather than money. Software Development is our passion where We are working on. We will help you to accomplish your task successfully within the deadline. We have a outstanding team where we are working with difference types of project. Please feel free to ask us if you need any further information. We will get back to you as soon as possible.
                        </p>

                    </div>

                    <div>
                        <img src={'/Assets/Img/fivosoft-about Img.png'} alt="" className="w-[50%] text-center mx-auto lg:mt-[-10px]" />
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-4 text-center mt-5 mb-20">
                    <div className="lg:mr-10">
                        <h3 className='text-2xl md:text-3xl font-Montserrat-Bold font-bold mb-7 mt-5 text-[#fdb300] uppercase'>We work as partners, not clients</h3>
                        <p className="mb-4 text-[#9C9C9CFF]">
                            We always try to associate our clients in the decision-making process because feedback creates opportunities for us. We are also pro transparency and want to share our quality, knowledge and experience. To us you are not just another client, another project. Your success is our success. You are looking for a partnership, so are we.
                        </p>
                    </div>

                    <div className="lg:ml-10">
                        <h3 className='text-2xl md:text-3xl font-Montserrat-Bold font-bold mb-7 mt-5 text-[#fdb300] uppercase'>We love our work and our people</h3>
                        <p className="mb-4 text-[#9C9C9CFF]">
                            We love our work and our people. With a team of confident and talented software developers, UI/UX designers, QA experts and project managers; we are dedicated to provide you with best-in-class IT solutions. As partners working towards the same goal, you have the liberty to bring ideas to the table at every stage of the development process.
                        </p>
                    </div>
                </div>

            </div>
            <Collaboration />
        </div>
    )
}
