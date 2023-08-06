import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{ value: Category | "all" }> = ({
  value,
}) => {
  return <li>{value}</li>;
};

const ProjectNavbar = () => {
  return (
    <div>
      <NavItem value="all" />
      <NavItem value="react" />
      <NavItem value="mongo" />
      <NavItem value="django" />
      <NavItem value="node" />
      <NavItem value="express" />
    </div>
  );
};

export default ProjectNavbar;
