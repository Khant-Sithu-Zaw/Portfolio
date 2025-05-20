import React from "react";
import EducationItem from "./EducationItem";
import CertificateCard from "./CertificateCard";
import dynamic from 'next/dynamic';


const About: React.FC<{}> = () => {
  return (
    <section id="education" className="px-8 md:px-20 text-white text-center">
      <h2
        className="text-2xl md:text-6xl sm:text-4xl  font-bold mb-8"

      >
        Education & Certifications
      </h2>

      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xs sm:text-1xl ">
        EXPLORE NOW
      </p>
      {/* Education */}
      <div className="mb-12" >
        <div className="space-y-0">
          <EducationItem
            title="Computer Science"
            place="University of Computer Studies,Yangon"
            year="2017 - 2020"
            description="Focused on Software Development, Data Structures, and Algorithms."
          />
          <EducationItem
            title="Communicative English"
            place="GETC"
            year="August 2017 - September 2017"
            description="Focused on English Language Communication Skills."
          />

          <EducationItem
            title="Certified Java Developer"
            place="Logic Union"
            year="May 2019 - July 2019"
            description="Focused on Java Programming, OOP, and Data Structures.Desktop Application Development with JavaFx."
          />
          <EducationItem
            title="Japanese Language N2 Course"
            place="I.G.M"
            year="December 2022 - May 2022"
            description="Focused on JLPT N2 level Japanese Language skills."
          />
          <EducationItem
            title="ITPEC Exam Preparation Course"
            place="ATL Computer Training Center"
            year="Jan 2023 - March 2024"
            description="Focused on IT business strategy, management principles, and core technology concepts to prepare for the ITPEC exam."
          />
          <EducationItem
            title="AOTS Web Development Scholarship Program"
            place="CGM Golden Land Co., Ltd"
            year="Nov 2023 - March 2024"
            description="Focused on IT business strategy, management principles, and core technology concepts to prepare for the ITPEC exam."
          />
          {/* Add more <EducationItem /> here */}
        </div>
      </div>
      {/* Certifications */}
      <div id="certificates">
        <h3 className="text-2xl font-semibold mb-8">Certificates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-5  rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="text-[15px] md:text-sm lg:text-xl xl:text-2xl font-semibold text-purple-300">Communicative English Level-2</h4>
            <p className="text-[13px] md:text-xs lg:text-sm xl:text-lg text-gray-400 mt-1">GETC • 2017</p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="text-[15px] md:text-sm lg:text-xl xl:text-2xl font-semibold text-purple-300">ITPEC FE Certificate</h4>
            <p className="text-[13px] md:text-xs lg:text-sm xl:text-lg text-gray-400 mt-1">JITEC / IPA Japan • 2024</p>
          </div>
          <div className="bg-white/5 p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="text-[15px] md:text-sm lg:text-xl xl:text-2xl font-semibold text-purple-300">ITPEC IP Certificate</h4>
            <p className="text-[13px] md:text-xs lg:text-sm xl:text-lg text-gray-400 mt-1">JITEC / IPA Japan • 2023</p>
          </div>
          <div className="bg-white/5 p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="text-[15px] md:text-sm lg:text-xl xl:text-2xl font-semibold text-purple-300">Java SE Developer</h4>
            <p className="text-[13px] md:text-xs lg:text-sm xl:text-lg text-gray-400 mt-1">Login Union • 2019 </p>
          </div>
          <div className="bg-white/5 p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="text-[15px] md:text-sm lg:text-xl xl:text-2xl font-semibold text-purple-300">Japanese Language Proficiency Test N2</h4>
            <p className="text-[13px] md:text-xs lg:text-sm xl:text-lg text-gray-400 mt-1">Japan Foundation/Japan Edu Exchange&Services • 2022</p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="text-[15px] md:text-sm lg:text-xl xl:text-2xl font-semibold text-purple-300">Asean Data Science Explorers</h4>
            <p className="text-[13px] md:text-xs lg:text-sm xl:text-lg text-gray-400 mt-1">SAP Southeast Asia/ASEAN Foundation • 2019</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
