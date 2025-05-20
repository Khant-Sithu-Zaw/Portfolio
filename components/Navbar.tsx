"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC<{}> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-['#111'] fixed backdrop-blur-sm z-50 px-6">
      <div className="w-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          title="logo"
          href="/"
          className="w-[200px] h-auto hidden flex-row items-center md:flex "
        >
          <Image
            src="/signature.png"
            alt="Sign"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-1 ">
          <a
            href="#education"
            className="z-[1] bg-transparent padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5"
          >
            Education
          </a>
          <a
            href="#experience"
            className="z-[1] bg-transparent padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5"
          >
            Work Experience
          </a>
          <a
            href="#projects"
            className="z-[1] bg-transparent padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5"
          >
            Projects
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-2xl z-50 pt-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu with animation */}
        <div
          className={`
            fixed top-0 left-0 w-full py-4 bg-black bg-opacity-10 flex flex-col items-center justify-center gap-8 md:hidden z-40
            transition-all duration-300 
            ${menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'}
          `}
        >
          <a
            href="#education"
            className="text-white text-sm "
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-white text-sm "
            onClick={() => setMenuOpen(false)}
          >
            Work Experience
          </a>
          <a
            href="#projects"
            className="text-white text-sm "
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
