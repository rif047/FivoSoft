import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Tab from './Tabs';


export default function HomeAbout() {
    return (
        <div className='bg-gradient-to-t from-slate-100 text-[#54595F] py-5 shadow-lg'>
            <div className='container mx-auto lg:grid grid-cols-2 items-center px-2 md:px-0'>
                <div className='grid justify-items-center'>
                    <Player
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/packages/lf20_dydyldzm.json"
                        style={{ height: '360px', width: '360px' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
                <div className='pb-4'>
                    <h1 className='text-center lg:text-left text-3xl md:text-4xl font-Montserrat-Bold font-bold mb-8 uppercase'>ABOUT <span className='text-[#fdb300]'>FIVOSOFT</span></h1>
                    <Tab />
                </div>


            </div>

        </div >
    )
}
