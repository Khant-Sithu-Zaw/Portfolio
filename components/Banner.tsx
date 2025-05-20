"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-6 sm:px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex">
          <Image
            priority
            src="/avatar.png"
            height={200}
            width={200}
            alt="Khant Sithu Zaw"
            className="sm:w-[250px] sm:h-[250px] w-[200px] h-[200px]"
          />
        </div>

        <div className="animate-glow tracking-tighter text-2xl sm:text-4xl md:text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Khant Sithu Zaw
        </div>
        <div className="flex justify-center">
          <p className="text-base sm:text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            <span className="inline-block tracking-[5px] uppercase animate-move text-black/90">Code</span>
            &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <Image
            src="/popcorn.gif"
            height={20}
            width={20}
            alt="PopCorn"
            className="sm:w-[50px] sm:h-[50px] w-[25px] h-[25px]"
          />
        </div>

        <p className="text-xs sm:text-lg text-gray-200 my-5 max-w-[600px]">
          Passionate Web Developer focused on creating seamless user experiences. Driven by a love for technology and a commitment to continuous learning, I specialize in Angular.js, React.js, Laravel, and Java. I excel at transforming complex ideas into intuitive applications.
        </p>
        <div className="text-md flex justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=khantsithuzaw10@gmail.com"
            className="z-[1] no-underline padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent text-xs sm:text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
