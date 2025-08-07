import React from 'react'

const ClickMe = () => {
    return (
        <div className='absolute'>
            <p className="w-[69px] h-[20px] font-outfit font-normal text-[16px] leading-[100%] tracking-normal">Click me!</p>
            <div className="w-[50px] h-[50px] rotate-[3.56deg]">
                <img src="icons/ClickmeArrow.svg" className="w-[36.26px] h-[49.93px] top-[0.5px] left-[6.8px] absolute rotate-[3.56deg] " alt="ClickmeArrow" />
            </div>
        </div>
    )
}

export default ClickMe
