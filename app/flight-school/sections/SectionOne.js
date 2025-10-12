"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ribbon from "../../../public/images/ribbon.svg";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { MdFacebook } from "react-icons/md";
import "./index.css";
import { flightSchoolContent } from "../../../lib/data";

function SectionOne({ index,currentIndex }) {
  const headingTitle = useRef(null);
  // ---------------------------------------
  const bottomFirstSection = useRef(null);
  const bottomFirstSectionPara = useRef(null);
  // ---------------------------------------

  const [readMore, setReadMore] = useState(false);

  useGSAP(() => {
    // gsap code here...

    gsap.from(headingTitle.current, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });

    // ---------------
    gsap.from(bottomFirstSection.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });

    gsap.from(bottomFirstSectionPara.current, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    // ---------------------------
  });

  const socialMediaLink = (link) => {
    window.open(link, "_blank");
  };

  const titleOne =
    index === 1
      ? flightSchoolContent[1]?.content[currentIndex]?.contentOne
      : flightSchoolContent[index]?.contentOne;
  const titleTwo =
    index === 1
      ? flightSchoolContent[1]?.content[currentIndex]?.contentTwo
      : flightSchoolContent[index]?.contentTwo;
  const titleThree = index === 1 && flightSchoolContent[1].content[currentIndex]?.contentThree;

  const TextTwo = titleTwo;

  return (
    <section
      id="about"
      className="relative text-white font-fritz-regular w-full h-screen"
    >
      <p
        ref={headingTitle}
        className=" 830px:text-[25px] text-[24px] absolute 830px:p-0 p-[16px]   830px:top-40 992px:top-36 top-32 992px:left-6 left-2 right-6  text-black max-w-[400px] font-light  font-fritz-regular text-3xl w-[88%]"
      >
        Your gateway to government accredited flight training school
      </p>
      <div id="section1" className="w-full h-full"></div>
      <div
        ref={bottomFirstSection}
        className=" bg-black/70  z-50 h-[160px] px-6 fixed flex py-5 justify-between w-full bottom-0 left-0 right-0"
      >
        <div className="hidden flex-[38%] relative gap-2 h-full md:flex flex-col justify-end items-start">
          <img
            // src={ribbon}
            src="/images/ribbon.svg"
            className="absolute -z-1 top-5 -left-10"
            alt="is the rigbbon svf icons"
          />
          <div className="absolute gap-2 h-full flex flex-col justify-end items-start">
            <FaWhatsapp
              className="bg-yellow-500 transition-all w-6 h-6 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
              color="#000"
              size={24}
              title="Whatsapp"
            />
            <PiInstagramLogo
              onClick={() =>
                socialMediaLink("https://www.instagram.com/fenixair.in/")
              }
              className="bg-yellow-500 transition-all w-6 h-6 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
              color="#000"
              size={24}
              title="Instagram"
            />
            <MdFacebook
              onClick={() => {
                socialMediaLink("https://www.facebook.com/profile.php?id=61577068123284");
              }}
              className="bg-yellow-500 w-6 h-6 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
              color="#000"
              size={24}
              title="Facebook"
            />
            <FaLinkedinIn
              onClick={() => {
                socialMediaLink(
                  "https://www.linkedin.com/company/107496846/admin/page-posts/published/"
                );
              }}
              className="bg-yellow-500 w-6 h-6 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
              color="#000"
              size={24}
              title="LinkedIn"
            />
          </div>
        </div>
        <div
          ref={bottomFirstSectionPara}
          id="paragraph"
          className={`flex-[67%] pe-6 break-all overflow-auto flex flex-col justify-start gap-0 text-sm h-full ${index !== 1 && "gap-2"}`}
        >

          { titleOne && <p className={` ${index === 1 ? "pt-5" : ""} `}>{titleOne}</p>}

          {!readMore && <p className={`line-clamp-3 whitespace-pre-line ${index === 1 ? "pt-6" : ""} `}>{TextTwo}</p> }
          {!readMore && titleTwo?.length > 378 && (
            <span
              onClick={() => setReadMore(true)}
              className="text-[#D79B2A] block "
            >
              Read more ...
            </span>
          )}
          { index === 1 && titleThree && <p className={``}>{titleThree}</p>}

          {readMore && (
            <div className="">
              <p className="pb-0 ">{flightSchoolContent[index]?.contentTwo}</p>
              <p
                className="text-[#D79B2A] block"
                onClick={() => setReadMore(false)}
              >
                Read less...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
