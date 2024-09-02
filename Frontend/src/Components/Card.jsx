export default function Card(props) {
    return (
        <div className='bg-[#F8F9F9] pt-[80px] pb-[100px] pr-[35px] pl-[35px] mt-[20px] mb-[30px] mr-[30px] ml-[30px] text-center shadow-lg hover:shadow-2xl border border-b-4 border-b-[#4b4f58]'>
            <div className='serviceIcon'> {props.serviceIcon}</div>
            <h3 className='text-lg md:text-xl font-Montserrat-Bold font-bold mb-3 text-[#1C1C1C]'>{props.serviceTitle}</h3>
            <p className='text-[#9C9C9CFF] text-sm tracking-wider leading-6'>{props.serviceDescription}</p>
        </div>
    )
}
