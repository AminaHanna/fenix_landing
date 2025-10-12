"use client";

import { useEffect, useRef, useState } from 'react'
import "./index.css"
function SectionThree() {

  const [bgFixed, setBgFixed] = useState(false);
  const divRef = useRef(null);


  const handleScroll = () => {
    if (divRef.current) {
      const { top, bottom } = divRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is starting to scroll into view
      if (top <= windowHeight && bottom >= 0) {
        setBgFixed(false);
      }

      // Check if the element's top position is at the top of the viewport
      if (top <= 0) {
        setBgFixed(true);
      }

      // Check if the element is out of view
      if (bottom < 0 || top > windowHeight) {
        setBgFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section className="relative text-white font-fritz-regular w-full h-screen">
        <div ref={divRef} id={'section3'} className={`w-full h-full ${bgFixed ? 'bg-fixed ' : ''} `}></div>
        <p
        className=" 830px:text-[25px] text-[24px] absolute 830px:p-0 p-[16px]   830px:top-40 992px:top-36 top-32 992px:left-6 left-2 right-6  text-black max-w-[400px] font-light  font-fritz-regular text-3xl w-[88%]"
      >
        Our Affiliate Services
      </p>
      </section>
  )
}

export default SectionThree
