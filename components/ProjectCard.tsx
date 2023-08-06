import { FunctionComponent, useState } from "react";
import { IProject } from "../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      {/* eslint-disable-next-line */}
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center">{name}</p>

      {/* div when user clicks on */}
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            {/* eslint-disable-next-line */}
            <img src={image_path} alt={name} />
            <div>
              <a href={github_url}>
                <AiFillGithub />
                <span>GitHub</span>
              </a>
            </div>
            <div>
              <a href={deployed_url}>
                <AiFillProject />
                <span>Project</span>
              </a>
            </div>
          </div>
          <div>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <div>
              {key_techs.map((key_tech) => (
                <span key={key_tech}>{key_tech}</span>
              ))}
            </div>
          </div>
          <button>
            <MdClose size={30} onClick={() => setShowDetail(false)} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
