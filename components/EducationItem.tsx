import Image, { StaticImageData } from "next/image";
type EducationItemProps = {
  title: string;
  place: string;
  year: string;
  description: string;
  
};

const EducationItem = ({ title, place, year, description }: EducationItemProps) => (
  <div className=" p-4  shadow hover:shadow-lg transition">
    <h4 className="text-lg sm:text-2xl font-semibold text-purple-400">{title}</h4>
    <p className="text-[12px] sm:text-lg text-gray-400">{place} • {year}</p>
    <p className="text-[11px] sm:text-sm mt-1 text-gray-300">{description}</p>
  </div>
);

export default EducationItem;