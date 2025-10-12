"use client";

import AviationCalendar from "../AviationCalendar/AviationCalendar"
import Calender from "../AviationCalendar/Calender";
import CalendarPicker from "../AviationCalendar/Calender";
function SectionFive() {


  return (
    <section id='section5' className="relative text-white flex flex-col 992px:flex-row font-fritz-regular w-full h-screen">
        <div className="ms-6 font-fritz-regular 992px:pt-40 pt-36">
            <h2 className='text-xl mb-1'>Facts & Questions</h2>
            <h5 className='text-base font-[100]'>Why choose Us?</h5>

            <div className="text-sm mt-3">
                <div className="flex gap-2 items-center">
                    <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
                    <p>Comprehensive Training Programs</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
                    <p> Experienced and Certified Instructors</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
                    <p> Modern Fleet of Training Aircraft</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
                    <p>Flexible Scheduling Options</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
                    <p>Competitive Pricing</p>
                </div>
               
               

            </div>

            <p className='text-sm pt-4'>Join us today and take the first step towards a rewarding and exciting future in aviation.</p>
        </div>
    <div id={'section-5'} className={`992px:bg-right bg-bottom w-full h-full bg-fixed`}></div>

  </section>
  );
}

export default SectionFive;
