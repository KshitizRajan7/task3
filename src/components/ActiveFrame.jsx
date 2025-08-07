import React from 'react'

const ActiveFrame = ({title, description, number}) => {
    return (
        <div className="w-[592px] h-[461px] rounded-4xl bg-[#C33241] relative">
            {/* button */}
            <div className="inline-flex top-[40px] left-[393px] absolute gap-[8px]">
                <p className="w-[138px] h-[23px] font-outfit font-semibold text-lg leading-[100%] tracking-normal text-center text-[#F9EBEC]">View all Courses</p>
                {/* icon */}
                <div className="w-[20px] h-[20px] relative">
                    {/* arrow */}
                    <img src="icons/arrow.svg" className="w-[14px] h-[11.67px] top-[4.17px] left-[3px] absolute" alt="arrow" />
                </div>
            </div>
            <p className="w-[34px] h-[77px] top-[275px] left-[262px] absolute font-nohemi font-bold text-[64px] leading-[120%] tracking-normal text-center text-[#FFFFFF]">+</p>
            {/* frame 811897 */}
            <div className="inline-flex top-[126px] left-[90px] absolute gap-[42px] swipe-out">
                {/* react frame */}
                <div className="w-[75px] h-[75px] rotate-[16.67deg] ">
                    {/* react icon */}
                    <img src="icons/react.svg" className="h-[75px] w-[75px] top-0 rotate-[16.67deg]" alt='react' />
                </div>
                {/* messages frame */}
                <div className="w-[75px] h-[75px] rotate-[7.22deg] ">
                    {/* messages icon */}
                    <img src="icons/message.svg" className="h-[75px] w-[70.24px] top-[0.3px] left-[2.36px] rotate-[7.22deg]" alt='message' />
                </div>
                {/* vue icon */}
                <div className="w-[55.75px] h-[75px] rotate-[-8.97deg]  object-cover">
                    <img src="icons/vue.svg" className="w-full h-full object-cover scale-[1.6] top-2 absolute " alt='vue' />
                </div>
                {/* pen icon */}
                <img src="icons/pen.svg" className="w-[75px] h-[75px] rotate-[-12.61deg] " alt='pen' />
            </div>
            {/* frame 811895 */}
            <div className="inline-flex top-[283px] left-[75px] gap-[24px] absolute">
                <p className="w-[200px] h-[138px] font-nohemi font-bold text-[130px] leading-[120%] tracking-normal text-center text-[#F9EBEC]">{number}</p>
                {/* frame 811894 */}
                <div className="inline-flex flex-col w-[218px] gap-[12px]  justify-center">
                    <p className="w-[270px] h-[40px] font-outfit font-bold text-[30px] leading-[100%] tracking-normal text-center text-[#F9EBEC]">{title}</p>
                    <p className="w-[218px] h-[46px] font-outfit font-normal text-[18px] leading-[100%] tracking-normal text-[#F9EBEC]">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ActiveFrame
