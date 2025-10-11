"use client";

import React from "react";
import Link from "next/link";

function LinkLists({
  handleOnClickFunction,
  activeSection = false,
  compareActiveSection,
  title,
  hrefNavigateId,
}) {
  return (
    <li
      onClick={handleOnClickFunction}
      className={`${
        activeSection === compareActiveSection && "text-[#D79B2A]"
      } hover:text-[#D79B2A]`}
    >
      <Link href={hrefNavigateId} scroll={true}>
        {title}
      </Link>
    </li>
  );
}

export default LinkLists;
