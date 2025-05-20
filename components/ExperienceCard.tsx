import Image from "next/image"; // or your image import method

type ExperienceType = {
  company: string;
  role: string;
  location: string;
  date: string;
  description: string;
  skills: string[];
  logoSrc: string;
};

const ExperienceCard: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
  return (
    <div className="mb-10">
      <div className="flex md:flex-row lg:justify-between md:items-center flex-col">
        <div className="flex md:items-center gap-3 md:flex-row flex-col items-start">
          <Image
            src={experience.logoSrc}
            height= {150}
            width={150}
            alt="Company Logo"
          />
          <p className="text-gray-300 font-semibold text-[11px] sm:text-base">
            <span className="bg-gradient-to-r from-purple-700 to-yellow-900 sm:font-semibold font-extrabold ">{experience.company} </span>/ {experience.role}
          </p>
        </div>
        <p className="text-gray-300 md:pt-0 pt-3 text-[10px] sm:text-base">{experience.date}, {experience.location}</p>
      </div>
      <p className="text-gray-300 pt-5 whitespace-pre-line text-[10px] sm:text-base">{experience.description}</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {experience.skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max text-[9px] sm:text-base"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExperienceCard;