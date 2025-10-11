"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname, useRouter } from "next/navigation";
import { CgClose, CgMenuMotion } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useSidebar } from "../../../context/sidebarContext";
import { eyeCloseIcon, eyeOpenIcon } from "../../../data/icons";
import { toast } from "keep-react";
import axios from "axios";
import { SERVER_URL } from "../../../api/baseUrl";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
  studentData,
  studentToken,
} from "../../../api/localStorage";
import SignUp from "./SignUp";
import Login from "./Login";




export const validateEmail = (email) => {
  if (!email) return { status: true, message: "Please fill in the email." };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return { status: true, message: "Email is not valid." };
  return { status: false, message: "" };
};

export const validateName = (name) => {
  if (!name) return { status: true, message: "Name is required." };
  if (name.length < 3 || name.length > 50)
    return {
      status: true,
      message: "Name must be between 3 and 50 characters.",
    };
  return { status: false, message: "" };
};

export const validatePassword = (password,required) => {
  if(required){

  if (!password) return { status: true, message: "Password is required." };
  if (password.length < 8 || password.length > 16)
    return {
      status: true,
      message: "Password must be between 8 and 16 characters.",
    };


  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasLetter || !hasNumber || !hasSpecial)
    return {
      status: true,
      message:
        "Password must contain at least one letter, one number, and one special character.",
    };

  return { status: false, message: "" };

}

return true;
};



function FlightHeader({ setContactForm }) {
  const [path, setPath] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [toggleVisibleContactState, setToggleVisibleContactState] =
    useState(false);
  const [activeSection, setActiveSection] = useState(""); // State to track active section

  const pathname = usePathname();

  const { handleToggleAuthFunction, authState,closeAuthState } = useSidebar();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.hash);
    }
  }, []);

  const headerList = useRef(null);
  const indicators = useRef(null);
  const logoRef = useRef(null);
  const sidebar = useRef(null);
  const sidebarController = useRef(null);
  const headerRef = useRef();

  useGSAP(
    () => {
      // GSAP animations here
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
        backgroundColor: "#00000080",
        display: "block",
        backdropFilter: "blur(4px)",
        duration: 0.5,
        delay: 0.1,
        opacity: 1,
      });
    },
    { scope: headerRef.current }
  );

  const toggleSidebar = () => {
    sidebarController.current.play(); // play animation to show sidebar
  };

  const closeSidebar = () => {
    sidebarController.current.reverse(); // reverse animation to close sidebar
  };

  const toggleMenu = () => setIsVisible(!isVisible);
  const handletoggleVisibleContact = () =>
    setToggleVisibleContactState(!toggleVisibleContactState);

  function getFullHeight() {
    if (typeof document === 'undefined') return 0;
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      const totalHeight = getFullHeight();
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const sectionHeight = totalHeight / 6;

      const currentSectionIndex = Math.floor(scrollPosition / viewportHeight);
      const newActiveSection = `#section${currentSectionIndex + 1}`;

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeSection]);



  const handleToggleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      removeLocalStorage(studentToken);
      removeLocalStorage(studentData);
      toast.success("Logged out successfully");
    }
  };
  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 w-full px-6 items-center 1300px:h-[140px] h-[120px] bg-black/70 z-50 text-white flex justify-between"
      >
        <div
          onClick={toggleMenu}
          ref={indicators}
          className="w-[30px] 992px:flex hidden flex-col gap-2"
        >
          <a
            onClick={toggleMenu}
            // href="#section1"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            onClick={toggleMenu}
            // href="#section2"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            onClick={toggleMenu}
            // href="#section3"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            onClick={toggleMenu}
            // href="#section4"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
        </div>
        <div className="w-full 992px:hidden block" onClick={toggleSidebar}>
          <div className="w-2 mb-1 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
          <div className="w-2 mb-1 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
          <div className="w-2 mb-1 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
          <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
        </div>
        <div className="w-[160px] h-full cursor-pointer">
          <img
            onClick={() => router.push("/")}
            ref={logoRef}
            className="w-full h-full object-contain"
            src={logo}
            alt=""
          />
        </div>
      </header>

      {/* mobile sidebar */}
      <div ref={sidebar} className="w-full opacity-0 elative hidden">
        <p
          className=" p-2 rounded-full cursor-pointer overflow-hidden absolute top-11 left-5"
          onClick={closeSidebar}
        >
          <CgClose color="#fff" size={24} />
        </p>
        <ul className="text-white/70 flex justify-start items-start ps-8 pt-24 gap-2 text-[20px] font-fritz-regular h-full">
          <li
            onClick={closeSidebar}
            className="hover:scale-105 hover:text-[#D79B2A]"
          >
            <Link href="/">Home</Link>
          </li>
          <li
            // onClick={closeSidebar}
            onClick={() => {
              handletoggleVisibleContact();
            }}
            className={`${
              toggleVisibleContactState && "mb-5"
            } relative flex flex-row items-center gap-1 hover:scale-105 ${
              activeSection === "#section1" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <a href="#section1">About Us</a>

            {!toggleVisibleContactState ? (
              <IoMdArrowDropdown className="mt-1" />
            ) : (
              <IoMdArrowDropup />
            )}

            {toggleVisibleContactState && (
              <ul
                className={`flex flex-col top-7 w-[150px] left-0 absolute text-[15px] text-white/80  my-0 `}
              >
                <a
                  className={`" w-full ${
                    activeSection === "#section6" && "text-[#D79B2A]"
                  } hover:text-[#D79B2A]`}
                  href="#section6"
                  onClick={() => {
                    closeSidebar();
                  }}
                >
                  Meet Our Team
                </a>
              </ul>
            )}
          </li>
          <li
            onClick={closeSidebar}
            className={`hover:scale-105 ${
              activeSection === "#section2" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <a href="#section2">Aircraft Categories</a>
          </li>
          <li
            onClick={closeSidebar}
            className={`hover:scale-105 ${
              activeSection === "#section3" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <a href="#section3">Affiliate Services</a>
          </li>
          <li
            className={`rel hover:scale-105 ${
              activeSection === "#section4" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
            onClick={closeSidebar}
          >
            <div className="flex items-center gap-2 ">
              <a href="#section4">Contact Us</a>
            </div>
          </li>
          <li
            onClick={closeSidebar}
            className={`hover:scale-105 ${
              activeSection === "#section6" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <a href="#section5">FAQ</a>
          </li>
        </ul>
      </div>
      {/* mobile sidebar */}

            {/* register */}
      {authState === 1 && (
   <SignUp nextAuth={handleToggleAuthFunction} closeAuthState={closeAuthState} auth={handleToggleAuthFunction}/>
      )}

{/* login */}
      {authState === 2 && (
      <Login closeAuthState={closeAuthState} auth={handleToggleAuthFunction} />
      )}
    </>
  );
}

export default FlightHeader;
