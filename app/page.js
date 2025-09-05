"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";

export default function LandingPage() {
  const [landingPageButtonOne, setLandingPageButtonOne] = useState(false);
  const router = useRouter();

  const socialMediaLink = (link, string) => {
    window.open(link, "_blank");
  };

  return (
    <section id="bg" className="w-full relative h-screen font-fritz-regular">
      {/* Background */}
      <Image
        src="/LandingPageBackground.svg" // put file in /public/images
        alt="Background"
        fill
        priority
        className="w-full overflow-hidden h-[100vh] object-cover hidden md:block"
      />
      <div className={"w-full h-full bg-black/65 md:hidden block"}></div>

      {/* Launching Soon Banner */}
      <div className="absolute top-1/3 ml-16">
        <Image
          src="/logo.jpg"
          alt="Launching Soon"
          width={800}
          height={400}
          className="drop-shadow-lg"
        />
      </div>

      {/* Main overlay content */}
      <div className="w-full absolute z-[1000] text-white top-0 left-0 right-0 bottom-0 h-screen flex gap-10">
        {/* Left column (desktop only) */}
        <div className="flex-[60%] hidden md:flex flex-col px-10 py-5 h-full">
          <div className=" w-[30px] 830px:flex hidden flex-col gap-2">
            <a href="#first-section" className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></a>
            <a href="#second-section" className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></a>
            <a href="#third-section" className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></a>
          </div>

          {/* Social icons (left) */}
          <div className=" gap-2 h-full z-50 flex justify-end flex-col">
            <FaWhatsapp
              className="bg-yellow-500 transition-all w-7 h-7 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
              color="#000"
              size={26}
              title="Whatsapp"
            />
            <PiInstagramLogo
              onClick={() => socialMediaLink("https://www.instagram.com/fenixair.in/")}
              className="bg-yellow-500 transition-all w-7 h-7 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
              color="#000"
              size={26}
              title="Instagram"
            />
            <MdFacebook
              onClick={() => {
                socialMediaLink("https://www.facebook.com/fenixair.in/");
              }}
              className="bg-yellow-500 w-7 h-7 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
              color="#000"
              size={26}
              title="Facebook"
            />
            <FaLinkedinIn
              onClick={() => {
                socialMediaLink(
                  "https://www.linkedin.com/company/fenix-air-private-limited/?originalSubdomain=in"
                );
              }}
              className="bg-yellow-500 w-7 h-7 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
              color="#000"
              size={25}
              title="LinkedIn"
            />
          </div>
        </div>

        {/* Right column (logo, heading, nav) */}
        <div className="flex-[40%] relative flex flex-col justify-between pt-16 ps-10 992px:ps-0 py-36 md:py-20 items-center">
          {/* Logo */}
          <Image
            src="/logo.svg" // put file in /public/images
            alt="Fenix Air"
            width={260}
            height={120}
            className="md:w-[260px] w-[230px] object-contain"
            priority
          />

          {/* Tagline */}
          <h1 className="text-white leading-[32px] relative">
            <span className="md:text-[100px] text-[80px] absolute md:-left-10 -left-8 md:top-[60px] top-[67px] text-white/40 md:text-white/20 -z-30">
              &#38;
            </span>

            <span className="md:text-[27px] text-[25px] block">Experience</span>
            <span className="md:text-[40px] text-[37px] block">Luxury</span>
            <span className="md:text-[50px] text-[47px] md:ps-3 ps-2 pt-1 block">Convenience</span>
            <span className="flex pt-3 relative">
              <span className="absolute -left-6 md:text-[20px] text-[17px] top-1">with</span>
              <span className="md:text-[50px] text-[47px] ps-3 block">Fenix Air</span>
            </span>
          </h1>

          {/* Bottom navigation */}
          <div className="w-full">
            <ul className="relative flex 992px:gap-6 gap-3 w-full 992px:text-[16px] text-[14px] ps-3 992px:ps-0 font-fritz-regular transition-all ease-in-out duration-200">
              {/* Charters dropdown */}
              <li
                onClick={() => {
                  setLandingPageButtonOne((v) => !v);
                }}
                className="hover:text-[#D79B2A] flex items-center gap-1 group cursor-pointer"
              >
                Charters{" "}
                <span>
                  {!landingPageButtonOne ? <IoMdArrowDropdown className="mt-1" /> : <IoMdArrowDropup />}
                </span>
                {landingPageButtonOne && (
                  <div className="absolute top-10 left-0 md:-left-[90px] h-full">
                    <ul className="flex text-[14px] text-white/80 992px:gap-5 gap-5 992px:bg-transparent p-3">
                      <li className="hover:text-[#D79B2A]" onClick={() => router.push("/private-jet")}>
                        Private Jet
                      </li>
                      <li className="hover:text-[#D79B2A]" onClick={() => router.push("/airtaxi")}>
                        Air Taxi
                      </li>
                      <li className="hover:text-[#D79B2A]" onClick={() => router.push("/airambulance")}>
                        Air Ambulance
                      </li>
                      <li className="hover:text-[#D79B2A]" onClick={() => router.push("/cargo")}>
                        Cargo
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Flight School */}
              <li
                onClick={() => router.push("/flight-school")}
                className="hover:text-[#D79B2A] flex items-center gap-1 group cursor-pointer"
              >
                Flight School
              </li>

              {/* Helicopter */}
              <li
                onClick={() => router.push("/helicopter")}
                className="hover:text-[#D79B2A] flex items-center gap-1 group cursor-pointer"
              >
                Helicopter
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile dots (left top) */}
      <div className="h-[100px] absolute top-0 md:hidden justify-center items-center flex flex-col gap-1 left-0 w-[70px]">
        <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
        <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
        <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
        <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
      </div>

      {/* Mobile social (bottom left) */}
      <div className="h-[70px] absolute bottom-0 md:hidden justify-center items-center flex flex-row gap-1 left-4 w-[100px]">
        <FaWhatsapp
          className="bg-yellow-500 transition-all w-5 h-5 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
          color="#000"
          size={26}
          title="Whatsapp"
        />
        <PiInstagramLogo
          onClick={() => socialMediaLink("https://www.instagram.com/fenixair.in/")}
          className="bg-yellow-500 transition-all w-5 h-5 rounded-md p-[3px] cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
          color="#000"
          size={26}
          title="Instagram"
        />
        <MdFacebook
          onClick={() => {
            socialMediaLink("https://www.facebook.com/fenixair.in/");
          }}
          className="bg-yellow-500 transition-all w-5 h-5 rounded-md p-[4px] cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
          color="#000"
          size={26}
          title="Facebook"
        />
        <FaLinkedinIn
          onClick={() => {
            socialMediaLink(
              "https://www.linkedin.com/company/fenix-air-private-limited/?originalSubdomain=in"
            );
          }}
          className="bg-yellow-500 transition-all w-5 h-5 rounded-md p-[4px] cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
          color="#000"
          size={26}
          title="LinkedIn"
        />
      </div>
    </section>
  );
}
