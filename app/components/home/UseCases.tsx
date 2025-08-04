"use client";


import { useCases } from "@/lib/utils";

export const UseCases = () => {

  return (
    <section
      id="use-cases"
      className="py-24 md:py-32 bg-gray-900/30 backdrop-blur-sm relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
              Tailored for Real Estate
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how different types of real estate businesses leverage our
            platform for their specific needs.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
   <div
                key={index}
                className="use-case relative overflow-hidden rounded-xl group translate-y-8 transition-all duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-5 border border-gray-800/30">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 bg-gray-800/50 backdrop-blur-lg text-white rounded-md transition-all duration-300 border border-gray-700/50 relative overflow-hidden group">
            <span className="relative z-10">View All Use Cases</span>
            <span className="absolute inset-0 bg-gray-700/50 rounded-md group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};
