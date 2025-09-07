"use client";

import React from "react";
import "./index.css";

export default function SectionFive() {
  return (
    <section id="section5" className="relative text-white flex flex-col 992px:flex-row font-fritz-regular w-full h-screen">
      <div className="ms-6 font-fritz-regular 992px:pt-40 pt-36">
        <h2 className="text-xl mb-1">Facts & Questions</h2>
        <h5 className="text-base font-[100]">Why choose Us?</h5>

        <div className="text-sm mt-3">
          {[
            "Comprehensive Training Programs",
            "Experienced and Certified Instructors",
            "Modern Fleet of Training Aircraft",
            "Flexible Scheduling Options",
            "Competitive Pricing",
          ].map((t) => (
            <div key={t} className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-[#D79B2A] rounded-full" />
              <p>{t}</p>
            </div>
          ))}
        </div>

        <p className="text-sm pt-4">
          Join us today and take the first step towards a rewarding and exciting future in aviation.
        </p>
      </div>

      {/* background via CSS for #section-5 */}
      <div id="section-5" className="992px:bg-right bg-bottom w-full h-full bg-fixed" />
    </section>
  );
}
