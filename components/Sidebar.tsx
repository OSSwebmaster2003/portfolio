import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src="https://avatars.githubusercontent.com/u/117542307?s=400&u=fb80fe048c7d3925b6aad3c1b57bbc6248d45923&v=4"
        alt="user avatar"
        className="mx-auto rounded-full"
        width="128"
        height="128"
        layout="intrinsic"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="mx-1 text-green">Otabek</span>
        Sodiqov
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        href=""
        download="name"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillYoutube className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center gap-1">
          <GoLocation />
          <span>Bukhara,Uzbekistan</span>
        </div>
        <p className="my-2">sodikovotabeksobirjonovich1509@gmail.com</p>
        <p className="my-2">+998936843757 / +998934506315</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() =>
          window.open("mailto : sodikovotabeksobirjonovich1509@gmail.com")
        }
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white rounded-full cursor-pointer bg-blac bg-gradient-to-r from-green to-blue-500"
      >
        Toggle Theme
      </button>
    </div>
  );
};
export default Sidebar;
