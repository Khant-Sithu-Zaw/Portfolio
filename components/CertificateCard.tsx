import Image from "next/image";

type CertificateCardProps = {
  title: string;
  issuer: string;
  year: string;
 // or StaticImageData if using imported image files
};

const CertificateCard = ({ title, issuer, year }: CertificateCardProps) => (
  <div className="bg-white/5 p-4 rounded-xl shadow hover:scale-105 transition text-left">
    
    <h4 className="text-lg mt-3 font-semibold">{title}</h4>
    <p className="text-sm text-gray-400">{issuer} • {year}</p>
  </div>
);

export default CertificateCard;
