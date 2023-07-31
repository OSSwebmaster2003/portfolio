import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span onClick={() => setActiveItem(name)}>About</span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("About");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <span className="text-green">{activeItem}</span>
      <div className="flex space-x-3 text-red-500 font-lg">
        <NavItem
          activeItem="About"
          name="About"
          route="/"
          setActiveItem={() => setActiveItem}
        />
        <NavItem
          activeItem="Projects"
          name="Projects"
          route="/projects"
          setActiveItem={() => setActiveItem}
        />
        <NavItem
          activeItem="Resume"
          name="Resume"
          route="/resume"
          setActiveItem={() => setActiveItem}
        />
      </div>
    </div>
  );
};

export default Navbar;
