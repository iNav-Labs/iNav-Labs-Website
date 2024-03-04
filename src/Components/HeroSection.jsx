import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image_1.png";

const HeroSection = () => {
  return (
    <div id="home">
      <motion.div
        className="relative flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.img
          src={image1}
          alt="hero"
          className="z-2 max-w-full md:max-w-2xl rounded-md"
          initial={{ opacity: 0, scale: 0.8, y: -50 }} // Adjusted initial values
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        />
        <motion.p
          className="absolute font-LexendDeca text-center text-2xl md:text-7xl text-black tracking-tight top-16 z-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          style={{ fontfamily: "Lexend zetta" }}
        >
          A U T O N O M O U S
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
