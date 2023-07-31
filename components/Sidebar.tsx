import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { LuPhoneCall } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div>
      {/* eslint-disable-next-line */}
      <img
        src="https://avatars.githubusercontent.com/u/117542307?s=400&u=fb80fe048c7d3925b6aad3c1b57bbc6248d45923&v=4"
        alt="user avatar"
      />
      <h1>
        <span>Otabek</span>
        Sodiqov
      </h1>
      <p>Web Developer</p>
      <p>
        <GiTie className="w-6 h-6" />
        Download Resume
      </p>
      <div>
        <a href="">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillYoutube className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      <div>
        <div>
          <GoLocation />
          <span>Bukhara,Uzbekistan</span>
        </div>
        <p>sodikovotabeksobirjonovich1509@gmail.com</p>
        <p>
          <LuPhoneCall />
          +998936843757 / +998934506315
        </p>
      </div>
      <button>Email me</button>
      <button>Toggle theme</button>
    </div>
  );
};
export default Sidebar;
