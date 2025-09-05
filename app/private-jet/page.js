"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import { arr } from "@/lib/data";

import SectionOne from "@/components/charters/SectionOne";
import SectionTwo from "@/components/charters/SectionTwo";
import SectionThree from "@/components/charters/SectionThree";
import SectionFour from "@/components/charters/SectionFour";
import SectionFive from "@/components/charters/SectionFive";

export default function ChartersPage() {
  const [contactForm, setContactForm] = useState(false);
  const [index, setIndex] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const numSections = arr.length;

      const newIndex =
        currentScrollY > lastScrollY
          ? Math.min(Math.floor(currentScrollY / sectionHeight), numSections - 1)
          : Math.max(Math.floor(currentScrollY / sectionHeight), 0);

      setIndex(newIndex);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <main>
      <Header setContactForm={setContactForm} />
      <SectionOne index={index} />
      <SectionTwo />
      <SectionThree />
      <SectionFour setContactForm={setContactForm} contactForm={contactForm} />
      <SectionFive />
    </main>
  );
}
