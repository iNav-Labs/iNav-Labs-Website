import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItemVariants = {
    rest: { scale: 1, borderColor: "transparent" },
    hover: { scale: 1.1, borderColor: "" },
  };

  return (
    <header className="flex justify-between p-6 m-5">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="company logo"
          className="md:w-10 md:h-10 w-6 h-6 md:rounded-2xl rounded-lg"
        />
        <div>
          <span className="font-semibold md:text-3xl text-xl text-green-500 tracking-wider font-LexendDeca">
            i
          </span>
        </div>
        <span className="font-semibold md:text-3xl text-xl tracking-widest font-LexendDeca">
          NAV LABS
        </span>
      </div>

      <div
        className={`md:flex hidden md:visible gap-10 border border-gray-400 px-10 rounded-full shadow-md shadow-gray-200 items-center bg-stone-100 ${
          isNavOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a className="text-sm" href="#home">
            HOME
          </a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a href="#service" className="text-md">
            SERVICES
          </a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a href="#Whatwedo" className="text-md">
            ABOUT US
          </a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a className="text-md" href="#team">
            OUR TEAM
          </a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a className="text-md" href="#contactus">
            CONTACT US
          </a>
        </motion.div>
      </div>

      {/* Mobile Toggle Button */}
      <div
        className="md:hidden"
        style={{ position: "absolute", top: "50px", right: "50px" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={toggleNav}
          className={`cursor-pointer ${isNavOpen ? "hidden" : ""}`}
        >
          <FaBars className="text-lg" />
        </motion.div>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50"
            onClick={toggleNav}
          />
        )}
        {isNavOpen && (
          <FaTimes onClick={toggleNav} className="cursor-pointer" />
        )}
      </div>

      {/* Responsive Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50"
            onClick={toggleNav}
          >
            <div className="gap-16 shadow-md text-center bg-white p-8 rounded">
              <div className="flex flex-col space-y-2">
                <FaTimes onClick={toggleNav} className="cursor-pointer" />
                <a href="#home">Home</a>
                <a href="#service">Services</a>
                <a href="#Whatwedo">About Us</a>
                <a href="#team">Our Team</a>
                <a href="#contactus">Contact Us</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
