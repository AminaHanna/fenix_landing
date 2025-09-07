"use client";

import React, { useEffect, useRef, useState } from "react";
import "./index.css";

export default function SectionThree() {
  const [bgFixed, setBgFixed] = useState(false);
  const divRef = useRef(null);

  const handleScroll = () => {
    if (!divRef.current) return;
    const { top, bottom } = divRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    if (top <= vh && bottom >= 0) setBgFixed(false);
    if (top <= 0) setBgFixed(true);
    if (bottom < 0 || top > vh) setBgFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative text-white font-fritz-regular w-full h-screen">
      <div ref={divRef} id="section3" className={`w-full h-full ${bgFixed ? "bg-fixed" : ""}`} />
      <p className="830px:text-[25px] text-[24px] absolute 830px:p-0 p-[16px] 830px:top-40 992px:top-36 top-32 992px:left-6 left-2 right-6 text-black max-w-[400px] font-light font-fritz-regular text-3xl w-[88%]">
        Our Affiliate Services
      </p>
    </section>
  );
}
