"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react";
import { testimonials } from "@/lib/utils";
import SpotlightCard from "@/app/blocks/Components/SpotlightCard/SpotlightCard";
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section className="py-24 md:py-32 bg-gray-900/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real estate professionals trust GreyHound Smart Systems to power
            their business operations.
          </p>
        </div>
        <div className="relative">
          <div className="max-w-3xl mx-auto  translate-y-8 transition-all duration-1000">
            <SpotlightCard
              className="custom-spotlight-card  bg-gray-900/30 backdrop-blur-xl rounded-xl  border border-gray-800/30 shadow-lg shadow-violet-500/5"
              spotlightColor="rgba(99, 102, 241, 0.2)"
            >
              <div className="">
                <div className="text-violet-400 text-6xl font-serif mb-4">
                  <QuoteIcon/>
                </div>
                <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-violet-500/50">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          <div className="flex justify-center mt-10 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800/50 backdrop-blur-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50"
            >
              <ChevronLeftIcon size={24} />
            </button>
            <div className="flex space-x-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-violet-500 w-8"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800/50 backdrop-blur-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50"
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
