import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  return (
    <div>
      <span>{activeItem}</span>
      <div className="text-red font-lg">
        {activeItem !== "About" && (
          <Link href="/">
            <span onClick={() => setActiveItem("About")}>About</span>
          </Link>
        )}
        {activeItem !== "Resume" && (
          <Link href="/resume">
            <span onClick={() => setActiveItem("Resume")}>Resume</span>
          </Link>
        )}
        {activeItem !== "Projects" && (
          <Link href="/projects">
            <span onClick={() => setActiveItem("Projects")}>Projects</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
