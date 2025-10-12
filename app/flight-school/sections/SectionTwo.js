"use client";

import { useEffect, useRef, useState } from "react";

// Swiper imports removed as not used in the provided code

function SectionTwo({ currentIndex, setCurrentIndex }) {
  const images = ["/assets/images/flight-school/image-6.jpg", "/assets/images/flight-school/image-7.jpg", "/assets/images/flight-school/image-1.jpg"];

  const [bgFixed, setBgFixed] = useState(false);
  const divRef = useRef(null);

  const handleScroll = () => {
    if (divRef.current) {
      const { scrollHeight, clientHeight } = divRef.current;
      if (scrollHeight <= window.scrollY) {
        setBgFixed(true);
      } else {
        setBgFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const sliderContent = [
    {
      title: "Our Fleet",
      description:
        "At Fenix Air Flight School, we pride ourselves on maintaining a modern and diverse fleet of aircraft. Our well-maintained planes are equipped with the latest technology to ensure safety and enhance the training experience.",
    },
    {
      title: "Our Fleet",
      description:
        "At Fenix Air Flight School, we pride ourselves on maintaining a modern and diverse fleet of aircraft. Our well-maintained planes are equipped with the latest technology to ensure safety and enhance the training experience.",
    },
    {
      title: "Our Fleet",
      description:
        "At Fenix Air Flight School, we pride ourselves on maintaining a modern and diverse fleet of aircraft. Our well-maintained planes are equipped with the latest technology to ensure safety and enhance the training experience.",
    },
  ];

  return (
    <section
      id="section2"
      className=" relative text-white font-fritz-regular w-full h-screen"
    >
      <div
        ref={divRef}
        draggable={true}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `right ${currentIndex === 0 ? "43%" : "57%"}`,
        }}
        className={`bg-cover w-full h-full ${bgFixed ? "bg-fixed " : ""}`}
      >
        <div className="absolute z-50 992px:top-[160px] top-[60px] ps-[20px] pe-[20px] text-black max-w-[550px] w-full">
          <h2 className="text-[22px] mb-2">
            {sliderContent[currentIndex]?.title}
          </h2>
          <p className="text-[16px] font-[300]">
            {sliderContent[currentIndex]?.description}
          </p>
        </div>

        <div className="z-40 absolute top-[73%] left-[50%]">
          {images.map((_, index) => (
            <button
              key={index}
              style={{ transform: "translateX(-50%,-50%)" }}
              className={`indicator ${
                index <= currentIndex ? "bg-[#D79B2A]" : "bg-black"
              } w-[10px] me-2  h-[10px] rounded-full `}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
