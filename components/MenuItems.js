"use client";

import { IoMdArrowDropdown } from "react-icons/io";

export default function MenuItem({
  label,
  dropdownItems,
  onClickAction,
  isDropdownOpen,
  setActiveDropdown,
  index,
}) {
  const handleClick = () => {
    if (dropdownItems) {
      setActiveDropdown(isDropdownOpen ? null : index);
    } else {
      onClickAction && onClickAction();
    }
  };

  return (
    <li
      onClick={handleClick}
      className="hover:text-[#D79B2A] text-nowrap flex items-center gap-1 group relative cursor-pointer"
    >
      {label}
      {dropdownItems && (
        <span
          className={`transition-transform duration-300 ease-in-out transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoMdArrowDropdown className="mt-1" />
        </span>
      )}

      {isDropdownOpen && dropdownItems && (
        <div className="absolute top-10 left-0 md:-left-[90px]">
          <ul className="flex 992px:flex-row flex text-[14px] text-white/80 992px:gap-5 gap-2 bg-transparent p-3">
            {dropdownItems.map((item, idx) => (
              <li
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  item.onClickAction && item.onClickAction();
                }}
                className="hover:text-[#D79B2A]"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
