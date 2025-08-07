"use client"
import ActiveFrame from "@/components/ActiveFrame";
import ClickMe from "@/components/ClickMe";
import CoursesFrame from "@/components/CoursesFrame";
import { courses } from "@/data/data.js";
import { useState } from "react";


export default function Home() {
  const [isAllcoursesActive, setIsAllCoursesActive] = useState(true);
  const [isUpcomingActive, setIsUpcomingActive] = useState(false);
  const [isOngoingActive, setIsOngoingActive] = useState(false);
  const [isShowClickmeAllcourses, setIsShowClickmeAllcourses] = useState(false);
  const [isShowClickmeUpcoming, setIsShowClickmeUpcoming] = useState(false);
  const [isShowClickmeOutgoing, setIsShowClickmeOutgoing] = useState(false);
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
            <div className="inline-flex w-[1216px] h-[461px] gap-[32px]">
              {/* active */}
              {isAllcoursesActive ?
                courses.filter(course => course.type === "Allcourses").map((course, index) => (
                  <div key={index}>
                    <ActiveFrame key={course.type} {...course} />
                  </div>
                ))
                :
                courses.filter(course => course.type === "Allcourses").map((course, index) => (
                  <div key={index} onClick={() => { setIsAllCoursesActive(true); setIsOngoingActive(false); setIsUpcomingActive(false) }} onMouseOver={() => setIsShowClickmeAllcourses(true)} onMouseLeave={() => setIsShowClickmeAllcourses(false)}>
                    {isShowClickmeAllcourses && <ClickMe/>}
                    <CoursesFrame key={course.type} {...course} />
                  </div>
                ))
              }

              {/* inactive */}

              {/* upcoming */}
              {isUpcomingActive ?
                courses.filter(course => course.type === "Upcoming").map((course, index) => (
                  <div key={index}>
                    <ActiveFrame key={course.type} {...course} />
                  </div>

                ))
                :
                courses.filter(course => course.type === "Upcoming").map((course, index) => (
                  <div key={index} onClick={() => { setIsAllCoursesActive(false); setIsOngoingActive(false); setIsUpcomingActive(true) }} onMouseOver={() => setIsShowClickmeUpcoming(true)} onMouseLeave={() => setIsShowClickmeUpcoming(false)}>
                    {isShowClickmeUpcoming && 
                    <ClickMe/>
                    }
                    <CoursesFrame key={course.type} {...course} />
                  </div>
                ))
              }
              {/* ongoing */}
              {isOngoingActive ?
                courses.filter(course => course.type === "Ongoing").map((course, index) => (
                  <div key={index}>
                    <ActiveFrame key={course.type} {...course} />
                  </div>
                ))
                :
                courses.filter(course => course.type === "Ongoing").map((course, index) => (
                  <div key={index} onClick={() => { setIsAllCoursesActive(false); setIsOngoingActive(true); setIsUpcomingActive(false) }} onMouseOver={() => setIsShowClickmeOutgoing(true)} onMouseLeave={() => setIsShowClickmeOutgoing(false)}>
                    {isShowClickmeOutgoing && (
                      <ClickMe/>
                    )}
                    <CoursesFrame key={course.type} {...course} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
