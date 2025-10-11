"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import MenuItem from "../components/MenuItems";

import ParallaxBackground from "../components/ParallaxBackground";
import Calender from "../components/AviationCalendar/Calender";

export default function LandingPage() {
  const [bannerLogos, setBannerLogos] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const socialMediaLink = (link) => window.open(link, "_blank");

  const menuItems = [
    {
      label: "Charters",
      dropdownItems: [
        { label: "Private Jet", onClickAction: () => router.push("/private-jet") },
        { label: "Air Taxi", onClickAction: () => setBannerLogos(2) },
        { label: "Air Ambulance", onClickAction: () => setBannerLogos(4) },
        // { label: "Cargo", onClickAction: () => setBannerLogos(5) },
      ],
    },
    {
      label: "Flight School",
      dropdownItems: [
        { label: "PPL", onClickAction: () => setBannerLogos(1) },
        { label: "CPL", onClickAction: () => setBannerLogos(2) },
        { label: "ATPL", onClickAction: () => setBannerLogos(4) },
        { label: "Instructor Rating", onClickAction: () => router.push("/flight-school") },
      ],
    },
    { label: "Helicopter", onClickAction: () => setBannerLogos(6) },
    {
      label: "Cargo",
      onClickAction: () => setBannerLogos(5),
    },
  ];

  return (
    <>
      <ParallaxBackground />
      <section id="bg" className="w-full relative h-screen font-fritz-regular">
      
      {/* Background Image */}
      <img
        src="/LandingPageBackground.svg"
        alt="Background"
        className="w-[100%] overflow-hidden h-[100vh] object-cover hidden md:block"
      />


      {/* Mobile Overlay */}
      <div className="w-full h-full bg-black/65 md:hidden block"></div>

      {/* Left side with banner images */}
      <div className="absolute z-[1000] text-white top-0 left-0 right-0 bottom-0 flex gap-10 h-screen">
        <div className="flex-[60%] hidden md:flex flex-col px-10 py-5 h-full">
          {/* Section Dots */}
          <div className="w-[30px] 830px:flex hidden flex-col gap-2">
            {[1, 2, 3, 4].map((dot) => (
              <div key={dot} className="w-2 h-2 bg-[#D79B2A] rounded-full cursor-pointer"></div>
            ))}
          </div>

          {/* Banner Images */}
          {bannerLogos === 4 && (
            <div className="pt-52">
              <Image src="/air-ambulance.png" alt="Air Ambulance" width={600} height={400} />
            </div>
          )}
          {bannerLogos === 2 && (
            <div className="pt-52">
              <Image src="/air-taxi.png" alt="Air Taxi" width={600} height={400} />
            </div>
          )}
          {bannerLogos === 5 && (
            <div className="pt-52">
              <Image src="/air-cargo.png" alt="Air Cargo" width={600} height={400} />
            </div>
          )}
          {bannerLogos === 6 && (
            <div className="pt-52">
              <Image src="/helicopter.png" alt="Helicopter" width={600} height={400} />
            </div>
          )}

          {/* Social Icons */}
          <div className="gap-2 h-full flex justify-end flex-col">
            <FaWhatsapp
              className="bg-yellow-500 w-7 h-7 rounded-md p-1 cursor-pointer"
              color="#000"
              title="Whatsapp"
            />
            <PiInstagramLogo
              onClick={() => socialMediaLink("https://www.instagram.com/fenixair.in/")}
              className="bg-yellow-500 w-7 h-7 rounded-md p-1 cursor-pointer"
              color="#000"
              title="Instagram"
            />
            <MdFacebook
              onClick={() => socialMediaLink("https://www.facebook.com/fenixair.in/")}
              className="bg-yellow-500 w-7 h-7 rounded-md p-1 cursor-pointer"
              color="#000"
              title="Facebook"
            />
            <FaLinkedinIn
              onClick={() =>
                socialMediaLink(
                  "https://www.linkedin.com/company/fenix-air-private-limited/?originalSubdomain=in"
                )
              }
              className="bg-yellow-500 w-7 h-7 rounded-md p-1 cursor-pointer"
              color="#000"
              title="LinkedIn"
            />
          </div>
        </div>

        {/* Right Side (Logo + Heading + Menu) */}
        <div className="flex-[40%] relative flex flex-col justify-between pt-16 ps-10 py-36 md:py-20 items-center">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Fenix Air"
            width={260}
            height={120}
            className="md:w-[260px] w-[230px] object-contain"
            priority
          />

          {/* Heading */}
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

          {/* Menu Items */}
          <div className="w-full">
            <ul className="relative flex justify-center 992px:gap-6 gap-3 w-full 992px:text-[16px] text-[14px] ps-3 992px:ps-0 font-fritz-regular transition-all ease-in-out duration-200">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  label={item.label}
                  dropdownItems={item.dropdownItems}
                  onClickAction={item.onClickAction}
                  isDropdownOpen={activeDropdown === index}
                  setActiveDropdown={setActiveDropdown}
                  index={index}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile dots */}
      <div className="h-[100px] absolute top-0 md:hidden flex flex-col justify-center items-center gap-1 left-0 w-[70px]">
        {[1, 2, 3, 4].map((dot) => (
          <div key={dot} className="w-2 h-2 bg-[#D79B2A] rounded-full cursor-pointer"></div>
        ))}
      </div>

      {/* Mobile social */}
      <div className="h-[70px] absolute bottom-0 md:hidden flex flex-row justify-center items-center gap-1 left-4 w-[100px]">
        <FaWhatsapp className="bg-yellow-500 w-5 h-5 rounded-md p-1 cursor-pointer" color="#000" />
        <PiInstagramLogo
          onClick={() => socialMediaLink("https://www.instagram.com/fenixair.in/")}
          className="bg-yellow-500 w-5 h-5 rounded-md p-1 cursor-pointer"
          color="#000"
        />
        <MdFacebook
          onClick={() => socialMediaLink("https://www.facebook.com/fenixair.in/")}
          className="bg-yellow-500 w-5 h-5 rounded-md p-1 cursor-pointer"
          color="#000"
        />
        <FaLinkedinIn
          onClick={() =>
            socialMediaLink(
              "https://www.linkedin.com/company/fenix-air-private-limited/?originalSubdomain=in"
            )
          }
          className="bg-yellow-500 w-5 h-5 rounded-md p-1 cursor-pointer"
          color="#000"
        />
      </div>
    </section>
    {/* <Calender /> */}
    </>
  );
}
