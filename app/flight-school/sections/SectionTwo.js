"use client";

import React, { useEffect, useRef, useState } from 'react'
import { flightSchoolContent } from '@/lib/data';

function SectionTwo({ setCurrentIndex, currentIndex, index }) {

  const [bgFixed, setBgFixed] = useState(false);
  const divRef = useRef(null);

  const aircraftData = flightSchoolContent[1]?.content || [];

  const currentAircraft = aircraftData[currentIndex] || {};

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : aircraftData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < aircraftData.length - 1 ? prev + 1 : 0));
  };

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
      <div 
        ref={divRef} 
        id="flight-school-section2" 
        className={`w-full h-full ${bgFixed ? 'bg-fixed ' : ''}`}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-4xl md:text-5xl mb-4">{currentAircraft.contentOne}</h2>
          <p className="text-lg md:text-xl mb-4 max-w-2xl">{currentAircraft.contentTwo}</p>
          {currentAircraft.contentThree && <p className="text-sm md:text-base mb-8">{currentAircraft.contentThree}</p>}
          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
            >
              Prev
            </button>
            <button 
              onClick={handleNext}
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
            >
              Next
            </button>
          </div>
          <p className="text-sm mt-4">{currentIndex + 1} / {aircraftData.length}</p>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
