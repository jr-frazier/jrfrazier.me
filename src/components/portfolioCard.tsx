import Image from "next/image";
import { BsLink45Deg, BsGithub } from "react-icons/bs";

interface Props {
  title: string;
  description: string;
  imageLink?: string;
  imageAlt?: string;
  github?: string;
  link?: string;
}

const PortfolioCard = ({
  title,
  description,
  imageLink,
  imageAlt,
  github,
  link,
}: Props) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl rounded-lg">
      <figure>
        <Image
          src={imageLink ? imageLink : "/const-reg2.png"}
          alt={imageAlt ? imageAlt : "Default Image"}
          width={400}
          height={100}
        />
      </figure>
      <div className="card-body items-center text-center pt-2">
        <div className="flex gap-3 w-full justify-start">
          {github && (
            <a
              className="border border-black rounded p-2 hover:cursor-pointer"
              href="https://www.constellix.com/"
            >
              {<BsGithub size={20} />}
            </a>
          )}
          {link && (
            <a
              className="border border-black rounded p-2 hover:cursor-pointer"
              href={link}
            >
              {<BsLink45Deg size={20} />}
            </a>
          )}
        </div>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-sm btn-accent rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
