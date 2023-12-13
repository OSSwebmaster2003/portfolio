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
      <NavItem value="html" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="typescript" {...props} />
      <NavItem value="next" {...props} />
      <NavItem value="mern" {...props} />
    </div>
  );
};

export default ProjectNavbar;
