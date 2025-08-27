import { NavLink } from "react-router-dom"

export default function Collaboration() {
    return (
        <div className='bg-[#FFF9EC] py-10'>
            <div className='container mx-auto lg:grid lg:grid-cols-2'>
                <div className='grid justify-center'>
                    <img className='w-[320px]' src={'/Assets/Img/fivosoft-collaboration.png'} alt="" />
                </div>

                <div className='grid content-center text-center lg:text-left'>
                    <div className="grid justify-center lg:block">
                        <h1 className='text-[#fdb300] text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-5'>Interested in <br />Collaboration?</h1>
                        <p className='text-[#54595F] mb-8'>Challenge us. <br /> We want to work with you to create the really cool stuff.</p>
                        <NavLink to={'/contact'} className={'mx-auto md:mx-0 text-center px-7 py-2 bg-slate-900 text-slate-50 hover:text-slate-200 rounded-lg font-bold w-[320px] shadow-lg hover:shadow-2xl block'}>START A PROJECT</NavLink>
                    </div>

                </div>

            </div>

        </div>
    )
}
