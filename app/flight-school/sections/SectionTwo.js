"use client";

import React, { useEffect, useRef, useState } from "react";

// If you keep Swiper elsewhere, this is fine too. These CSS files can live here.
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

export default function SectionTwo({ currentIndex, setCurrentIndex }) {
  // images served from /public
  const images = [
    "/assets/images/flight-school/image-6.jpg",
    "/assets/images/flight-school/image-7.jpg",
    "/assets/images/flight-school/image-1.jpg",
  ];

  const [bgFixed, setBgFixed] = useState(false);
  const divRef = useRef(null);

  const handleScroll = () => {
    if (divRef.current) {
      const { scrollHeight } = divRef.current;
      if (scrollHeight <= window.scrollY) setBgFixed(true);
      else setBgFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIndicatorClick = (idx) => setCurrentIndex(idx);

  const sliderContent = [
    {
      title: "Our Fleet",
      description:
        "At Fenix Air Flight School, we pride ourselves on maintaining a modern and diverse fleet of aircraft. Our well-maintained planes are equipped with the latest technology to ensure safety and enhance the training experience.",
    },
    { title: "Our Fleet", description: "..." },
    { title: "Our Fleet", description: "..." },
  ];

  return (
    <section id="section2" className="relative text-white font-fritz-regular w-full h-screen">
      <div
        ref={divRef}
        draggable
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `right ${currentIndex === 0 ? "43%" : "57%"}`,
        }}
        className={`bg-cover w-full h-full ${bgFixed ? "bg-fixed" : ""}`}
      >
        <div className="absolute z-50 992px:top-[160px] top-[60px] ps-[20px] pe-[20px] text-black max-w-[550px] w-full">
          <h2 className="text-[22px] mb-2">{sliderContent[currentIndex]?.title}</h2>
          <p className="text-[16px] font-[300]">{sliderContent[currentIndex]?.description}</p>
        </div>

        <div className="z-40 absolute top-[73%] left-[50%]">
          {images.map((_, i) => (
            <button
              key={i}
              style={{ transform: "translateX(-50%,-50%)" }}
              className={`indicator ${i <= currentIndex ? "bg-[#D79B2A]" : "bg-black"} w-[10px] me-2 h-[10px] rounded-full`}
              onClick={() => handleIndicatorClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
