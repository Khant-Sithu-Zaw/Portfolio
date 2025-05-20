"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../constant/experiences";
const Experience: React.FC<{}> = () => {
 
  return (
    <section id="experience" className="relative">
      {/* <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE */}
        <div className="relative flex justify-center text-3xl md:text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white box">
        {"EXPERIENCE".split("").map((char, index) => (
    <span
      key={index}
      className="inline-block text-white  drop-shadow-[0_0_5px_rgba(255,255,255,0.55)]"
    >
      {char}
    </span>
  ))}
        </div>
      {/* </h2> */}
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xs sm:text-1xl">
        EXPLORE NOW
      </p>
      <div className="lg:container mx-auto 2xl md:px-20 px-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
