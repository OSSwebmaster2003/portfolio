import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handleCategoryFilter = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((pr) =>
      pr.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectNavbar
        handleCategoryFilter={handleCategoryFilter}
        active={active}
      />
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-700"
            key={project.name}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
