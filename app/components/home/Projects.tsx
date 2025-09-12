import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="py-24 md:p-32">

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 tracking-tight">
        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
          What We´ve Built <span className="text-gray-400">{"</>"}</span>
        </span>
      </h2>
      <p className="text-xl text-gray-300 text-center px-4 max-w-2xl  mx-auto mb-16 leading-relaxed">
        A glimpse into how we turn ambitious ideas into scalable products that
        deliver lasting impact.
      </p>

      <div className="w-full grid grid-cols-1 px-4 gap-y-20 sm:px-6 lg:px-8 pt-10  justify-items-center ">
        <ProjectCard
         reversed={false}
         projectField=" Development"
         projectTitle="Mono Website"
        projectOverview="A modern, animated reimagining of the Mono platform. We rebuilt the site with GSAP-powered animations to create a smooth, engaging experience while keeping performance and accessibility top priority."
         projectImageUrl="bg-[image:url('/mono-mobile.png')]"
         projectLink="https://mono-gamma-six.vercel.app/"
         />
        <ProjectCard
         reversed={true}
         projectField=" Design & Development"
         projectTitle="Reapfold Real Estate Management Platform"
        projectOverview=" Reapfold is a next-generation real estate management web application built to simplify and scale property operations.
From client onboarding and realtor linking to installment-based payments, document workflows, and commission tracking, we crafted a seamless platform that empowers agencies to operate smarter and faster."
         projectImageUrl="bg-[image:url('/reapfold-mobile.png')]"
         projectLink="https://www.reapfold.com/"
         />
        <ProjectCard
         reversed={false}
         projectField=" Development"
         projectTitle="MK Web"
        projectOverview=" MK Web is a sleek, modern portfolio website designed to showcase the work and skills of a web design | developing company. With a focus on clean design and user experience, MK Web provides an engaging platform for potential clients and employers to explore projects and get in touch."
         projectImageUrl="bg-[image:url('/mk-web-mobile.png')]"
         projectLink="https://mk-web-tau.vercel.app/"
         />
      </div>
    </div>
  );
};

export default Projects;
