"use client";

import React, { useEffect, useState } from "react";
import FlightHeader from "./Layouts/FlightHeader";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import { flightSchoolContent } from '../../lib/data';
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";
import SectionFive from "./sections/SectionFive"
import SectionSix from "./sections/SectionSix"

function FlightSchool() {
  const [index, setIndex] = useState(0);

  const [lastScrollY, setLastScrollY] = useState(0);

  // state for section two slider
  const [currentIndex, setCurrentIndex] = useState(0);


 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const numSections = flightSchoolContent.length;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        const newIndex = Math.min(
          Math.floor(currentScrollY / sectionHeight),
          numSections - 1
        );
        setIndex(newIndex);
      } else {
        // Scrolling up
        const newIndex = Math.max(
          Math.floor(currentScrollY / sectionHeight),
          0
        );
        setIndex(newIndex);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, flightSchoolContent.length]);

 


  return (
    <main>
      <FlightHeader />
      
      
      <SectionOne index={index} currentIndex={currentIndex} />
      <SectionTwo setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} index={index} />
      <SectionThree  />
      <SectionFour  />
      <SectionFive  />
      <SectionSix  />
    </main>
  );
}

export default FlightSchool;
