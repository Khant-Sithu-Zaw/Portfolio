import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-3xl md:text-6xl pt-10">
        PROJECTS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-10 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xs sm:text-1xl mt-3">
        EXPLORE NOW
      </p>

      <div className="max-w-6xl mx-auto lg:px-4 grid gap-8 lg:grid-cols-2 md:grid-cols-1 md:px-10 px-12">
        {/* Project Card */}
        {[
          {
            title: "Travel Blog",
            description:
              "Developed a travel blog website using HTML, Pure CSS, and jQuery. It features a user-friendly interface allowing users to explore travel destinations and stories.",
            image: "/pure.png",
            link: "https://template-flax-ten.vercel.app/",
          },
          {
            title: "API Development",
            description:
              "Developed Laravel APIs for online shop and food store apps, enabling secure data handling and efficient frontend-backend communication.",
            image: "/Laravel_API.png",
            link: "https://github.com/Khant-Sithu-Zaw/api-backend",
          },
          {
            title: "Food Store",
            description:
              "Built a dark-themed food ordering site using React.js frontend and Laravel API backend. Features include real-time cart and menu filtering.",
            image: "/foodstore.png",
            link: "https://github.com/Khant-Sithu-Zaw/foodstore",
          },
          {
            title: "Online FoodShop",
            description:
              "Developed a light-themed food store using Angular.js frontend and Laravel backend API. Clean UI with search and product categories.",
            image: "/onlineshop.png",
            link: "https://github.com/Khant-Sithu-Zaw/OnlineShop",
          },
        ].map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
            className="group block bg-[#111] overflow-hidden shadow-md transition hover:shadow-lg z-50 hover:opacity-70"
          >
            <div className="flex flex-wrap h-auto justify-center md:justify-start sm:items-center lg:items-start">
              {/* Image */}
              <div className="relative h-[200px] sm:h-[300px] md:block w-[100%] md:w-1/2 md:h-[280px] lg:h-[210px] ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-center md:w-1/2">
                <h3 className="text-white text-xl font-semibold mb-2 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>

  );
};

export default Projects;
