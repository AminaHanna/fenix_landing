"use client";

import React, { useEffect, useRef, useState } from 'react'

function SectionSix() {

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
        <div ref={divRef} id="flight-school-section6" className={`w-full h-full ${bgFixed ? 'bg-fixed ' : ''} `}></div>
      </section>
  )
}

export default SectionSix
