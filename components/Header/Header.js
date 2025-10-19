"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "next/navigation";
import { CgClose, CgMenuMotion } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import LinkLists from "./LinkLists";
import axios from "axios";
import { SERVER_URL } from "../../api/baseUrl";

gsap.registerPlugin(useGSAP);

function Header({ setContactForm }) {
  const [path, setPath] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [toggleVisibleContactState, setToggleVisibleContactState] = useState(false);
  const [toggleBookingMenu, setToggleBookingMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [count, setCount] = useState(0); // Default to 0
  console.log(activeSection, "activeSection");
  const router = useRouter();

  useEffect(() => {
    const setHash = () => setPath(window.location.hash || "");
    setHash();
    window.addEventListener("hashchange", setHash);
    return () => window.removeEventListener("hashchange", setHash);
  }, []);

  const headerList = useRef(null);
  const indicators = useRef(null);
  const logoRef = useRef(null);
  const sidebar = useRef(null);
  const sidebarController = useRef(null);
  const headerRef = useRef();

  useGSAP(
    () => {
      headerList &&
        headerList.current &&
        gsap.from(headerList.current.children, {
          y: 20,
          duration: 1,
          delay: 0.5,
          stagger: 0.1,
          opacity: 0,
        });

      gsap.from(indicators.current.children, {
        y: 20,
        duration: 1,
        delay: 0.5,
        stagger: 0.1,
        opacity: 0,
      });

      gsap.from(logoRef.current, {
        y: 20,
        duration: 1,
        delay: 0.5,
        stagger: 0.1,
        opacity: 0,
      });

      sidebarController.current = gsap.timeline({ paused: true });

      sidebarController.current.to(sidebar.current, {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1111,
        // backgroundColor: "#00000080",
        display: "block",
        // backdropFilter: "blur(4px)",
        duration: 0.5,
        delay: 0.1,
        opacity: 1,
      });
    },
    { scope: headerRef.current }
  );

  const toggleSidebar = () => {
    sidebarController.current.play();
  };

  const closeSidebar = () => {
    sidebarController.current.reverse();
  };

  const toggleMenu = () => setIsVisible(!isVisible);
  const handletoggleVisibleContact = () =>
    setToggleVisibleContactState(!toggleVisibleContactState);

  function getFullHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = getFullHeight();
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const sectionHeight = totalHeight / 6;

      const currentSectionIndex = Math.floor(scrollPosition / viewportHeight);
      const newActiveSection = `#charters-section${currentSectionIndex + 1}`;

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const handleToggleBookingMenu = () => {
    setToggleBookingMenu(!toggleBookingMenu);
  };

  // useEffect(() => {
  //   fetchCount();
  // }, []);

  // const fetchCount = async () => {
  //   try {
  //     // Adjust SERVER_URL as needed for your Next.js setup
  //     const response = await axios.get(`${process.env.SERVER_URL || 'http://localhost:5000'}/admin/remaining-flight-count`);
  //     setCount(response?.data?.result?.[0]?.count || 0);
  //   } catch (error) {
  //     console.error(error?.response?.data?.message || error?.message || 'Failed to fetch count');
  //     // toast.error(error?.response?.data?.message || error?.message || 'Failed to fetch count');
  //   }
  // };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 w-full px-6 items-center 1300px:h-[140px] h-[120px] bg-black/70 z-50 text-white flex justify-between"
      >
        <div
          onClick={toggleMenu}
          ref={indicators}
          className="w-[30px] 830px:flex hidden flex-col gap-2"
        >
          <a
            onClick={toggleMenu}
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            onClick={toggleMenu}
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            onClick={toggleMenu}
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            onClick={toggleMenu}
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
        </div>
        <div className="w-full 830px:hidden block" onClick={toggleSidebar}>
          <div className="w-2 mb-1 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
          <div className="w-2 mb-1 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
          <div className="w-2 mb-1 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
          <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
        </div>
        <ul
          ref={headerList}
          className="830px:flex hidden transition-all ease-in-out py-3 text-base font-fritz-regular flex-1 justify-start gap-5 items-center text-white"
        >
            <LinkLists title={"Home"} hrefNavigateId={"/"} key={"home"} />

            <LinkLists
              activeSection={activeSection}
              compareActiveSection={"#charters-section1"}
              title={"About Us"}
              hrefNavigateId={"#charters-section1"}
              key={"#charters-section1"}
            />

            <LinkLists
              activeSection={activeSection}
              compareActiveSection={"#charters-section2"}
              title={"Aircraft Categories"}
              hrefNavigateId={"#charters-section2"}
              key={"#charters-section2"}
            />

            <LinkLists
              activeSection={activeSection}
              compareActiveSection={"#charters-section3"}
              title={"Affiliate Services"}
              hrefNavigateId={"#charters-section3"}
              key={"#charters-section3"}
            />

            <li
              className={`relative ${
                activeSection === "#charters-section4" && "text-[#D79B2A]"
              } hover:text-[#D79B2A]`}
            >
              <div
                className="flex items-center gap-2 "
                onClick={handletoggleVisibleContact}
              >
                <p>Contact Us</p>
                {!toggleVisibleContactState ? (
                  <IoMdArrowDropdown className="mt-1" />
                ) : (
                  <IoMdArrowDropup />
                )}
              </div>
              {toggleVisibleContactState && (
                <div className="  absolute top-6 left-0 h-full">
                  <ul className="flex  flex-col text-[14px] text-white/80 gap-0">
                    <a
                      className="hover:text-[#D79B2A]"
                      href="#charters-section4"
                      onClick={() => setContactForm(true)}
                    >
                      Enquiry
                    </a>
                    <a
                      className="flex items-center gap-1 relative hover:text-[#D79B2A]"
                      href="#charters-section4"
                      onClick={() => {
                        setContactForm(false);
                        handleToggleBookingMenu();
                      }}
                    >
                      <label htmlFor="">Booking</label>
                      {!toggleBookingMenu ? (
                        <IoMdArrowDropdown size={20} className="mt-1" />
                      ) : (
                        <IoMdArrowDropup size={20} />
                      )}
                    </a>

                    {toggleBookingMenu && (
                      <div className=" text-sm flex flex-col absolute top-14 left-5 backdrop-blur-sm rounded px-4 py-2 w-[150px]">
                        <label htmlFor="">One Way</label>
                        <label htmlFor="">Round Trip</label>
                        <label htmlFor="">Multi Leg</label>
                      </div>
                    )}
                  </ul>
                </div>
              )}
            </li>

            <LinkLists
              activeSection={activeSection}
              compareActiveSection={"#charters-section5"}
              title={"FAQ"}
              hrefNavigateId={"#charters-section5"}
              key={"#charters-section5"}
            />
          </ul>
        <div className=" flex  items-center ">
          <div className="flex items-center justify-center text-[12px] font-fritz-regular font-medium rounded-full mt-7 me-2 bg-[#D79B2A] w-8 p-1 h-8">
            {count}
          </div>
          <div className="w-[160px] h-full cursor-pointer">
            <Image
              onClick={() => router.push("/")}
              ref={logoRef}
              className="w-full h-full object-contain"
              src="/assets/images/logo.svg"
              alt="Fenix Air"
              width={160}
              height={64}
              priority
            />
          </div>
        </div>
      </header>

      <div ref={sidebar} className="w-full opacity-0 relative hidden">
        <p
          className=" p-2 rounded-full cursor-pointer overflow-hidden absolute top-11 left-5"
          onClick={closeSidebar}
        >
          {/* <CgClose color="#fff" size={24} /> */}
        </p>
        <ul className="text-white/70 flex justify-start items-start ps-15 pt-11 flex gap-2 text-[20px] font-fritz-regular h-full">
          <LinkLists title={"Home"} hrefNavigateId={"/"} key={"home"} />

          <LinkLists
            handleOnClickFunction={closeSidebar}
            activeSection={activeSection}
            compareActiveSection={"#charters-section1"}
            title={"About Us"}
            hrefNavigateId={"#charters-section1"}
            key={"#charters-section1"}
          />

          <LinkLists
            handleOnClickFunction={closeSidebar}
            activeSection={activeSection}
            compareActiveSection={"#charters-section2"}
            title={"Aircraft Categories"}
            hrefNavigateId={"#charters-section2"}
            key={"#charters-section2"}
          />

          <LinkLists
            handleOnClickFunction={closeSidebar}
            activeSection={activeSection}
            compareActiveSection={"#charters-section3"}
            title={"Affiliate Services"}
            hrefNavigateId={"#charters-section3"}
            key={"#charters-section3"}
          />

          <li
            className={`rel hover:scale-105 ${
              activeSection === "#charters-section4" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <div
              className="flex items-center gap-2 "
              onClick={handletoggleVisibleContact}
            >
              <p>Contact Us</p>
              {!toggleVisibleContactState ? (
                <IoMdArrowDropdown className="mt-1" />
              ) : (
                <IoMdArrowDropup />
              )}
            </div>
            {toggleVisibleContactState && (
              <ul className="flex flex-col text-[15px] text-white/80  my-0">
                <a
                  className="hover:text-[#D79B2A]"
                  href="#charters-section4"
                  onClick={() => {
                    setContactForm(true);
                    closeSidebar();
                  }}
                >
                  Enquiry
                </a>
                <a
                  className="flex items-center hover:text-[#D79B2A]"
                  href="#charters-section4"
                  onClick={() => {
                    setContactForm(false);
                    handleToggleBookingMenu();
                  }}
                >
                  <label htmlFor="">Booking</label>
                  {!toggleBookingMenu ? (
                    <IoMdArrowDropdown size={20} className="mt-1" />
                  ) : (
                    <IoMdArrowDropup size={20} />
                  )}
                </a>

                {toggleBookingMenu && (
                  <div className=" text-sm flex flex-col absolute top-14 left-20 backdrop-blur-sm rounded px-4 py-2 w-[150px]">
                    <label htmlFor="">One Way</label>
                    <label htmlFor="">Round Trip</label>
                    <label htmlFor="">Multi Leg</label>
                  </div>
                )}
              </ul>
            )}
          </li>

          <LinkLists
            handleOnClickFunction={closeSidebar}
            activeSection={activeSection}
            compareActiveSection={"#charters-section5"}
            title={"FAQ"}
            hrefNavigateId={"#charters-section5"}
            key={"#charters-section5"}
          />
        </ul>
      </div>
    </>
  );
}

export default Header;
