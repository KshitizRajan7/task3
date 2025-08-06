export default function Home() {
  return (
    <div className="h-screen w-screen inline-flex justify-center items-center">
      <div className="w-[1440px] h-[854px] bg-white relative">
        <p className="w-[6223px] h-[45px] top-[65px] left-[409px] absolute font-fustat font-medium text-[32px] leading-[100%] tracking-normal text-[#333333]">Note: Click the cards to view the animation</p>
        <div className="inline-flex flex-col w-[1440px] top-[68.5px] absolute pt-[60px] pr-[112px] pb-[60px] pl-[112px] gap-[20px] ">
          {/* content */}
          <div className="flex flex-col w-[1216px] gap-[20px] ">
            {/* text */}
            <div className="inline-flex flex-col w-fit gap-[20px] ">
              <p className="w-[484px] h-[30px] font-outfit font-normal text-2xl leading-[100%] tracking-normal text-[#414141]">Explore our classes and master trending skills!</p>
              <p className="w-[550px] h-[38px] font-nohemi font-bold text-[32px] leading-[120%] tracking-normal">Dive Into <span className="font-nohemi font-bold text-[32px] leading-[120%] tracking-normal text-[#1DA077]">What’s Hot Right Now! 🔥</span></p>
            </div>
            {/* stats */}
            <div className="inline-flex w-[1216px] h-[461px] gap-[32px]  ">
              {/* active */}
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
                <div className="inline-flex top-[126px] left-[90px] absolute gap-[42px]">
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
                  <p className="w-[200px] h-[138px] font-nohemi font-bold text-[130px] leading-[120%] tracking-normal text-center text-[#F9EBEC]">23</p>
                  {/* frame 811894 */}
                  <div className="inline-flex flex-col w-[218px] gap-[12px]  justify-center">
                    <p className="w-[164px] h-[40px] font-outfit font-bold text-[30px] leading-[100%] tracking-normal text-center text-[#F9EBEC]">All Courses</p>
                    <p className="w-[218px] h-[46px] font-outfit font-normal text-[18px] leading-[100%] tracking-normal text-[#F9EBEC]">courses you're powering through right now.</p>
                  </div>
                </div>
              </div>

              {/* upcoming */}
              <div className="w-[280px] h-[461px] rounded-4xl  relative ">
                <p className="w-[34px] h-[77px] top-[259px] left-[228px] absolute font-nohemi font-bold text-[64px] leading-[120%] tracking-normal text-center text-[#C33241]">+</p>
                {/* frame 811895 */}
                <div className="inline-flex flex-col top-[35px] left-[30px] absolute gap-[24px] ">
                  {/* frame 811894 */}
                  <div className="inline-flex flex-col h-[218px] gap-[12px]  rotate-90 justify-center items-center">
                    <div className="rotate-180 ">
                      <p className="w-[218px] h-[80px] font-outfit font-bold text-[32px] leading-[100%] tracking-normal text-[#C33241]">Upcoming Courses</p>
                      <p className="w-[218px] h-[46px] font-outfit font-normal text-[18px] leading-[100%] tracking-normal text-[#C33241]">exciting new courses waiting to boost your skills.</p>
                    </div>
                  </div>
                  {/* text */}
                  <p className="w-[209px] h-[180px] font-bold text-[150px] leading-[120%] tracking-normal text-center text-[#C33241]">05</p>
                </div>
              </div>
              {/* ongoing */}
              <div className="w-[280px] h-[461px] rounded-4xl  relative ">
                <p className="w-[34px] h-[77px] top-[259px] left-[228px] absolute font-nohemi font-bold text-[64px] leading-[120%] tracking-normal text-center text-[#C33241]">+</p>
                {/* frame 811895 */}
                <div className="inline-flex flex-col top-[35px] left-[30px] absolute gap-[24px] ">
                  {/* frame 811894 */}
                  <div className="inline-flex flex-col h-[218px] gap-[12px]  rotate-90 justify-center items-center">
                    <div className="rotate-180 ">
                      <p className="w-[218px] h-[80px] font-outfit font-bold text-[32px] leading-[100%] tracking-normal text-[#C33241]">Ongoing Courses</p>
                      <p className="w-[218px] h-[46px] font-outfit font-normal text-[18px] leading-[100%] tracking-normal text-[#C33241]">currently happening—don’t miss out on the action!</p>
                    </div>
                  </div>
                  {/* text */}
                  <p className="w-[209px] h-[180px] font-bold text-[150px] leading-[120%] tracking-normal text-center text-[#C33241]">10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
