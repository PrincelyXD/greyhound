import { workSteps } from "@/lib/utils"




export const HowItWorks = () => {


 
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden ">
      {/* Background accent */}
      <div className="absolute left-0 top-40 w-72 h-72 bg-violet-600/20 rounded-full filter blur-3xl opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get up and running quickly with our streamlined implementation
            process.
          </p>
        </div>
        <img src="/metalic.png" className="absolute -right-40 h-[600px] animate-slow-bounce opacity-[0.5] " alt="" />
        <div
       
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {  workSteps.map((step, index) => (
            <div
              key={index}
              className="step-card relative  translate-y-8 transition-all duration-700"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Connector line */}
              {index < workSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-violet-500 to-transparent z-0"
                  style={{
                    width: 'calc(100% - 2rem)',
                  }}
                ></div>
              )}
              <div className="bg-gray-900/30 backdrop-blur-lg border border-gray-800/30 rounded-xl p-6 relative z-10 h-full shadow-lg shadow-violet-500/5 hover:shadow-violet-500/10 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-violet-500 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-violet-500/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Ready to transform your real estate operations?
          </p>
          <button className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 font-medium relative overflow-hidden group">
            <span className="relative z-10">Schedule a Demo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 backdrop-blur-md opacity-20"></span>
          </button>
        </div>
      </div>
    </section>
  )
}


