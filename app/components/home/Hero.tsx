"use client";


import Typewriter from "typewriter-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import BlurText from "@/app/blocks/TextAnimations/BlurText/BlurText";
export const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 from-violet-900/10 to-transparent"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute top-60 right-10 w-72 h-72 bg-violet-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"
        style={{
          animationDelay: "2s",
          animationDuration: "8s",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 lg:px-8 relative bg-[url('/lines.svg')] bg-cover bg-center">
        <div className="text-center ">
          <span className="uppercase font-manrope block text-xs my-5 text-blue-400 tracking-[1px]">
            <Typewriter
              options={{
                strings: [
                  "One Platform. Unmatched Experience.",
                  "Smarter Real Estate. Seamless Execution.",
                  "The Engine Behind Modern Real Estate.",
                  "Next-Gen Tools for Real-World Estates.",
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 30,
              }}
            />
          </span>
          <h1 className="text-4xl font-manrope text-white md:text-5xl lg:text-6xl font-bold mb-6  tracking-tight">
            <span className="bg-gradient-to-r font-extrabold  from-blue-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
              Revolutionizing
            </span>
            <br />

            <BlurText
              text="Real Estate Management"
              delay={150}
              animateBy="words"
              direction="top"
              className=" flex justify-center"
            />
          </h1>
          <p className="text-lg md:text-xl font-manrope font-extralight text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            The complete platform built specifically for modern real estate
            companies to streamline operations, manage transactions, and boost
            revenue.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button className="px-8 py-3 bg-gradient-to-r cursor-pointer from-violet-600 to-indigo-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 font-medium relative overflow-hidden group">
              <span className="relative z-10">Get Started Free</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 backdrop-blur-md opacity-20"></span>
            </button>
            <button className="px-8 py-3 bg-gray-800/50 cursor-pointer backdrop-blur-lg text-white rounded-xl transition-all duration-300 border border-gray-700/50 relative overflow-hidden group">
              <span className="relative z-10">Book a Demo</span>
              <span className="absolute inset-0 bg-gray-700/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          <div className=" flex  -mt-14 ">
            <DotLottieReact src="/animations/hologram.lottie" autoplay loop />
          </div>
        </div>
      </div>
    </section>
  );
};
