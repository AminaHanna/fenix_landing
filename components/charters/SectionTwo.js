"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionTwo() {
  const [bgFixed, setBgFixed] = useState(false);
  const divRef = useRef(null);

  const handleScroll = () => {
    if (divRef.current) {
      const { scrollHeight, clientHeight } = divRef.current;
      if (scrollHeight <= window.scrollY) setBgFixed(true);
      else setBgFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative text-white font-fritz-regular w-full h-screen">
      <div
        ref={divRef}
        id="charters-section2"
        className={`w-full h-full ${bgFixed ? "bg-fixed" : ""}`}
      />
    </section>
  );
}
