import Hero from "../Components/Hero";
import HomeAbout from "../Components/HomeAbout";
import HomeService from "../Components/HomeService";
import Collaboration from "../Components/Collaboration";


export default function Home() {
    document.title = 'FivoSoft Technology';
    return (
        <>
            <section className=""> <Hero /> </section>
            <section className="mb-10"> <HomeAbout /> </section>
            <section className="mb-10"> <HomeService /> </section>

            <section className=" py-28 bg-gradient-to-b from-slate-300">
                <div className="container mx-auto px-2 ">
                    <h1 className='text-[#54595F] text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-3 text-center uppercase'>Our <span className='text-[#fdb300]'>Working Process</span></h1>
                    <p className="text-center mb-4 text-black"> Whether you’re a Fortune 500 or a startup in stealth mode – we give our clients the creative, technical and business talent they need to succeed.</p>
                    <img className="lg:w-[80%] text-center m-auto" src={'/Assets/Img/workingProcess.png'} alt="Working Process" />
                </div>
            </section>

            <section><Collaboration /></section>
        </>
    )
}
