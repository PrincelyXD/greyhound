"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { Orbit } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

interface ProjectCardProps {
  reversed?: boolean;
  projectImageUrl: string;
  projectField: string;
  projectOverview: string;
  projectTitle: string;
  projectLink: string;
}

const ProjectCard = ({
  reversed,
  projectImageUrl,
  projectField,
  projectOverview,
  projectTitle,
  projectLink,
}: ProjectCardProps) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const translate = useTransform(scrollYProgress, [0.3, 0.8], [0, -300]);
  return (
    <section
      className={`w-full  h-fit  gap-5 max-w-7xl flex ${
        reversed
          ? " flex-col-reverse lg:flex-row-reverse"
          : "flex-col-reverse lg:flex-row"
      }  `}
    >
      <div className=" relative block h-[300px] md:h-[500px] lg:h-[600px]   w-full lg:w-[60%] overflow-hidden  rounded-4xl ">
        <motion.div
          ref={imageRef}
          style={{
            translateY: translate,
          }}
          className={`h-[800px] sm:h-[1000px] w-full bg-cover ${projectImageUrl} `}
        />
      </div>
      {/* md:h-[650px] */}
      <div className=" project-card w-full  lg:w-[40%] h-fit md:h-[500px] lg:h-[600px] ">
        <div className="pt-10 mb-20">
          <span className=" text-sm text-slate-200 font-semibold opacity-[0.8]">
            {projectField}
          </span>
          <h3 className="text-2xl my-4 font-bold ">{projectTitle}</h3>

          <p className="text-sm leading-[1.8]">{projectOverview}</p>
        </div>

        <Link
          href={projectLink}
          target="_blank"
          className=" mt-6 text-sm font-medium group text-slate-400 relative z-[5]  hover:underline flex"
        >
          View Website{" "}
          <Orbit className="ml-3 group-hover:rotate-[30deg] transition-transform duration-500" />
        </Link>

        <img
          src="/metalic.png"
          alt=""
          className="absolute opacity-[0.2]  -bottom-52 right-0"
        />
      </div>
    </section>
  );
};

export default ProjectCard;
