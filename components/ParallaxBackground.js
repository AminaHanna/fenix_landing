// components/ParallaxBackground.js
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import LandingBackgroundSvg from "./LandingBackgroundSvg";

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });

  // Create vertical movement for background elements
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]); // slower
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]); // faster

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {/* Background Layer 1 */}
      <motion.div
        style={{
          y: y1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "150vh",
          background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
        }}
      />
      {/* Background Layer 2 */}
      <motion.div
        style={{
          y: y2,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "150vh",
          opacity: 0.2,
        }}
      >
        <LandingBackgroundSvg />
      </motion.div>

    </div>
  );
};

export default ParallaxBackground;
