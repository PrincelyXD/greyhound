"use client";
// import Threads from "../blocks/Backgrounds/Threads/Threads";

export const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900/80 to-gray-950 relative overflow-hidden ">
      {/* <div className="w-full h-[600px] absolute ">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div> */}
      {/* Background elements */}
      <div className="absolute left-1/4 top-0 w-64 h-64 bg-indigo-600/30 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-violet-600/30 rounded-full filter blur-3xl opacity-20" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative  translate-y-8 transition-all duration-1000">
      <div className="text-center">
  <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold mb-6 tracking-tight">
    Ready to build the
    <br />
    <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
      future of digital experiences?
    </span>
  </h2>

  <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
    Partner with Greyhound to design and develop powerful, scalable web and
    mobile solutions. Whether you´re a startup or an enterprise, we help you
    create products that stand out and grow with your business.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
    {/* Primary CTA */}
    <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 font-medium text-lg relative overflow-hidden group">
      <span className="relative z-10">Start Your Project</span>
      <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="absolute inset-0 backdrop-blur-md opacity-20"></span>
    </button>

    {/* Secondary CTA */}
    <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-lg text-white rounded-lg transition-all duration-300 text-lg border border-gray-700/50 relative overflow-hidden group">
      <span className="relative z-10">Book a Discovery Call</span>
      <span className="absolute inset-0 bg-gray-700/50 rounded-lg group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  </div>

  {/* Trusted By Section */}
  <div className="bg-gray-900/30 backdrop-blur-lg rounded-xl p-6 border border-gray-800/30">
    <div className="text-lg font-medium mb-5 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
      TRUSTED BY
    </div>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      <div className="text-xl font-bold text-gray-300">TechNova</div>
      <div className="text-xl font-bold text-gray-300">Innova Labs</div>
      <div className="text-xl font-bold text-gray-300">FutureWave</div>
      <div className="text-xl font-bold text-gray-300">Cloudify</div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};
