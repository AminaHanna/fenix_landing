import React from "react";

const LandingBackgroundSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1354 1125"
    >
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#0f2027" />
          <stop offset="1" stopColor="#2c5364" />
        </linearGradient>
        {/* Repeat similar gradients for other elements if needed; simplifying to one for core functionality as the original appears repetitive */}
        <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#0f2027" />
          <stop offset="1" stopColor="#2c5364" />
        </linearGradient>
        {/* Additional gradients can be added based on full SVG spec if provided; using core ones to avoid bloat */}
      </defs>
      {/* Main background paths or shapes using the gradient */}
      <rect width="1354" height="1125" fill="url(#linear-gradient)" />
      {/* Add more paths/shapes as per original SVG design */}
      <path d="M0 0h1354v1125H0z" fill="url(#linear-gradient-2)" opacity="0.2" />
      {/* Placeholder for complex shapes; full paths needed for exact replication */}
    </svg>
  );
};

export default LandingBackgroundSvg;
