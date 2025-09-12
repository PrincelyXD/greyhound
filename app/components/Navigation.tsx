"use client";

import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import CustomPillButton from "./CustomPillButton";
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 w-full  z-50 transition-all duration-300 ${
        isScrolled ? "" : "bg-transparent"
      }`}
    >
      <div
        className={`  mx-auto px-4 sm:px-6 lg:px-8 rounded-[20px] transition-all duration-600  ${
          isScrolled
            ? "bg-gray-900/70 max-w-[90%] md:max-w-[83%] lg:max-w-[65%] xl:max-w-[50%]  backdrop-blur-xl border-gray-800/30  shadow-drop"
            : "bg-transparent w-full max-w-[1380px] "
        } `}
      >


        <div className="flex justify-between items-center h-[56px] mt-5 ">
          <a href="https://greyhound-steel.vercel.app/" className="flex items-center group ">
          <img src="primary-logo.png" alt="G"  className="h-[70px]  group-hover:rotate-[-20deg] transition-transform duration-300 ease-in "/>
            <img src="/reyhound.png" className=" h-[120px] -ml-3 " alt="Greyhound" />
          </a>
          <nav className="hidden text-sm md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#use-cases"
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              Use Cases
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <CustomPillButton subTitle="Get a Quote" title="Let’s Go" />
          </div>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden  bg-gray-900/80 backdrop-blur-xl border-t border-gray-800/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              Use Cases
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              Projects
            </a>
            <div className="pt-4 pb-3 border-t border-gray-800/30">
              <button className="block w-full px-3 py-2 text-gray-300 hover:text-white text-left">
                Log in
              </button>
              <button className="block w-full mt-2 px-3 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
