"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import { CgClose } from "react-icons/cg";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

/* --------- validators (unchanged) ---------- */
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

export const validatePassword = (password, required) => {
  if (required) {
    if (!password) return { status: true, message: "Password is required." };
    if (password.length < 8 || password.length > 16)
      return {
        status: true,
        message: "Password must be between 8 and 16 characters.",
      };

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?\":{}|<>]/.test(password);

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
/* ------------------------------------------- */

function FlightHeader({ setContactForm }) {
  const [path, setPath] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [toggleVisibleContactState, setToggleVisibleContactState] =
    useState(false);
  const [activeSection, setActiveSection] = useState("");

  const [enrolLoader, setEnrolLoader] = useState(false);
  const [loginLoader, setLoginLoader] = useState(false);

  const router = useRouter();

  // replicate useLocation().hash
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
  const headerRef = useRef(null);

  useGSAP(
    () => {
      if (headerList.current) {
        gsap.from(headerList.current.children, {
          y: 20,
          duration: 1,
          delay: 0.5,
          stagger: 0.1,
          opacity: 0,
        });
      }
      if (indicators.current) {
        gsap.from(indicators.current.children, {
          y: 20,
          duration: 1,
          delay: 0.5,
          stagger: 0.1,
          opacity: 0,
        });
      }
      if (logoRef.current) {
        gsap.from(logoRef.current, {
          y: 20,
          duration: 1,
          delay: 0.5,
          opacity: 0,
        });
      }

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
    { scope: headerRef }
  );

  const toggleSidebar = () => sidebarController.current?.play();
  const closeSidebar = () => sidebarController.current?.reverse();

  const toggleMenu = () => setIsVisible((v) => !v);
  const handletoggleVisibleContact = () =>
    setToggleVisibleContactState((v) => !v);

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
      void totalHeight; // not used further (kept from original)
      const currentSectionIndex = Math.floor(scrollPosition / viewportHeight);
      const newActiveSection = `#section${currentSectionIndex + 1}`;
      if (newActiveSection !== activeSection) setActiveSection(newActiveSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const [errorState, setErrorState] = useState({
    name: { status: false, message: "" },
    email: { status: false, message: "" },
    password: { status: false, message: "" },
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChangeEvent = (e) => {
    const { name, value } = e.target;
    let error;
    if (name === "email") error = validateEmail(value);
    else if (name === "name") error = validateName(value);
    else if (name === "password") error = validatePassword(value, true);

    setErrorState((p) => ({ ...p, [name]: error }));
    setFormData((p) => ({ ...p, [name]: value }));
  };



  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible((v) => !v);

  const handleToggleEnroll = (e) => handleToggleAuthFunction("enroll", e);
  const handleToggleHide = (e) => handleToggleAuthFunction("none", e);
  const handleToggleLogin = (e) => handleToggleAuthFunction("login", e);

  const handleSubmitEnroll = async (e) => {
    try {
      e.preventDefault();
      const emailError = validateEmail(e.target.email.value);
      const nameError = validateName(e.target.name.value);
      const passwordError = validatePassword(e.target.password.value, true);

      setErrorState({ name: nameError, email: emailError, password: passwordError });

      if (!emailError.status && !nameError.status && !passwordError.status) {
        setEnrolLoader(true);
        // const response = await axios.post(`${SERVER_URL}/student/enroll`, formData);
        // toast.success(response.data?.message || "Enrolled successfully");
        handleToggleLogin();
      }
    } catch (error) {
    //   toast.error(error?.response?.data?.message || error?.message || "An error occurred ");
    } finally {
      setEnrolLoader(false);
    }
  };

  

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 w-full px-6 items-center 1300px:h-[140px] h-[120px] bg-black/70 z-50 text-white flex justify-between"
      >
        {/* left dots (desktop) */}
        <div onClick={toggleMenu} ref={indicators} className="w-[30px] 992px:flex hidden flex-col gap-2">
          <button className="w-2 h-2 bg-[#D79B2A] rounded-full" aria-label="dot-1" />
          <button className="w-2 h-2 bg-[#D79B2A] rounded-full" aria-label="dot-2" />
          <button className="w-2 h-2 bg-[#D79B2A] rounded-full" aria-label="dot-3" />
          <button className="w-2 h-2 bg-[#D79B2A] rounded-full" aria-label="dot-4" />
        </div>

        {/* mobile hamburger (your dotted style) */}
        <div className="w-full 992px:hidden block" onClick={toggleSidebar}>
          <div className="w-2 mb-1 h-2 bg-[#D79B2A] rounded-full" />
          <div className="w-2 mb-1 h-2 bg-[#D79B2A] rounded-full" />
          <div className="w-2 mb-1 h-2 bg-[#D79B2A] rounded-full" />
          <div className="w-2 h-2 bg-[#D79B2A] rounded-full" />
        </div>

        {isVisible && (
          <ul
            ref={headerList}
            className="992px:flex hidden transition-all ease-in-out py-3 text-base font-fritz-regular flex-1 justify-start gap-5 items-center text-white"
          >
            <li className="hover:text-[#D79B2A]">
              <Link href="/">Home</Link>
            </li>

            <li
              onClick={handletoggleVisibleContact}
              className={`relative flex items-center gap-1 ${
                activeSection === "#section1" && "text-[#D79B2A]"
              } hover:text-[#D79B2A]`}
            >
              <a href="#section1">About Us</a>
              {!toggleVisibleContactState ? <IoMdArrowDropdown className="mt-1" /> : <IoMdArrowDropup />}

              {toggleVisibleContactState && (
                <ul className="absolute top-7 left-0 w-[150px] flex flex-col text-[15px] text-white/80">
                  <a
                    className={`${activeSection === "#section6" && "text-[#D79B2A]"} hover:text-[#D79B2A]`}
                    href="#section6"
                    onClick={() => {
                      setContactForm?.(true);
                      closeSidebar();
                    }}
                  >
                    Meet Our Team
                  </a>
                </ul>
              )}
            </li>

            <li className={`${activeSection === "#section2" && "text-[#D79B2A]"} hover:text-[#D79B2A]`}>
              <a href="#section2">Aircraft Categories</a>
            </li>
            <li className={`${activeSection === "#section3" && "text-[#D79B2A]"} hover:text-[#D79B2A]`}>
              <a href="#section3">Affiliate Services</a>
            </li>
            <li className={`${activeSection === "#section4" && "text-[#D79B2A]"} hover:text-[#D79B2A]`}>
              <a href="#section4">Contact Us</a>
            </li>
            <li className={`${activeSection === "#section5" && "text-[#D79B2A]"} hover:text-[#D79B2A]`}>
              <a href="#section5">FAQ</a>
            </li>
          </ul>
        )}

        {/* logo */}
        <div className="w-[160px] h-full cursor-pointer">
          <Image
            onClick={() => router.push("/")}
            ref={logoRef}
            src="/assets/images/logo.svg"
            alt="Fenix Air"
            width={160}
            height={64}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </header>

      {/* mobile sidebar */}
      <div ref={sidebar} className="w-full h-screen opacity-0 hidden">
        <button className="p-2 rounded-full absolute top-11 left-5" onClick={closeSidebar} aria-label="Close">
          <CgClose color="#fff" size={24} />
        </button>

        <ul className="text-white/70 flex ps-8 pt-24 flex-col gap-2 text-[20px] font-fritz-regular h-full">
          <li onClick={closeSidebar} className="hover:scale-105 hover:text-[#D79B2A]">
            <Link href="/">Home</Link>
          </li>

          <li
            onClick={handletoggleVisibleContact}
            className={`${toggleVisibleContactState && "mb-5"} relative flex flex-row items-center gap-1 hover:scale-105 ${
              activeSection === "#section1" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <a href="#section1">About Us</a>
            {!toggleVisibleContactState ? <IoMdArrowDropdown className="mt-1" /> : <IoMdArrowDropup />}

            {toggleVisibleContactState && (
              <ul className="flex flex-col top-7 w-[150px] left-0 absolute text-[15px] text-white/80">
                <a
                  className={`${activeSection === "#section6" && "text-[#D79B2A]"} hover:text-[#D79B2A]`}
                  href="#section6"
                  onClick={closeSidebar}
                >
                  Meet Our Team
                </a>
              </ul>
            )}
          </li>

          <li onClick={closeSidebar} className={`hover:scale-105 ${activeSection === "#section2" && "text-[#D79B2A]"}`}>
            <a href="#section2">Aircraft Categories</a>
          </li>
          <li onClick={closeSidebar} className={`hover:scale-105 ${activeSection === "#section3" && "text-[#D79B2A]"}`}>
            <a href="#section3">Affiliate Services</a>
          </li>
          <li onClick={closeSidebar} className={`hover:scale-105 ${activeSection === "#section4" && "text-[#D79B2A]"}`}>
            <a href="#section4">Contact Us</a>
          </li>
          <li onClick={closeSidebar} className={`hover:scale-105 ${activeSection === "#section5" && "text-[#D79B2A]"}`}>
            <a href="#section5">FAQ</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FlightHeader;
