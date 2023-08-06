import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleCategoryFilter: Function;
  active: string;
}> = ({ value, handleCategoryFilter, active }) => {
  let classname = `capitalize cursor-pointer hover:text-green`;
  if (active === value) {
    classname += " text-green";
  }
  return (
    <li className={classname} onClick={() => handleCategoryFilter(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleCategoryFilter: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
    </div>
  );
};

export default ProjectNavbar;
