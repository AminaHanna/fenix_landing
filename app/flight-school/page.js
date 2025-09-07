"use client";

import React, { useEffect, useState } from "react";

// keep these relative imports if your files live under app/flight-school/
import FlightHeader from "./Layouts/FlightHeader";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";
import SectionFive from "./sections/SectionFive";
import SectionSix from "./sections/SectionSix";

// adjust this import to where your data actually lives:
// - if you put it in app/static/data.js:  "@/app/static/data"
// - if you use lib/data.js:               "@/lib/data"
import { flightSchoolContent } from "@/lib/data";

export default function FlightSchoolPage() {
  const [index, setIndex] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  // section two slider state
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const numSections = flightSchoolContent.length;

      const newIndex = Math.min(
        Math.max(Math.floor(currentScrollY / sectionHeight), 0),
        numSections - 1
      );

      // only update when it changes
      if (newIndex !== index) setIndex(newIndex);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <main>
      <FlightHeader />
      <SectionOne index={index} currentIndex={currentIndex} />
      <SectionTwo
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        index={index}
      />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  );
}
