import React from 'react'

const CoursesFrame = ({ title, description, number, key }) => {
    return (
        <div className="w-[280px] h-[461px] rounded-4xl  relative ">
            <p className="w-[34px] h-[77px] top-[259px] left-[228px] absolute font-nohemi font-bold text-[64px] leading-[120%] tracking-normal text-center text-[#C33241]">+</p>
            {/* frame 811895 */}
            <div className="inline-flex flex-col top-[35px] left-[30px] absolute gap-[24px] ">
                {/* frame 811894 */}
                <div className="inline-flex flex-col h-[218px] gap-[12px]  rotate-90 justify-center items-center">
                    <div className="rotate-180 ">
                        <p className="w-[218px] h-[80px] font-outfit font-bold text-[32px] leading-[100%] tracking-normal text-[#C33241]">{title}</p>
                        <p className="w-[218px] h-[46px] font-outfit font-normal text-[18px] leading-[100%] tracking-normal text-[#C33241]">{description}</p>
                    </div>
                </div>
                {/* text */}
                <p className="w-[209px] h-[180px] font-bold text-[150px] leading-[120%] tracking-normal text-center text-[#C33241]">{number}</p>
            </div>
        </div>
    )
}

export default CoursesFrame
