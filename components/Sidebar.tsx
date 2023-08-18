import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { CgCode, CgCodeSlash } from "react-icons/cg"
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/images/gabiLogo.png"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="144px"
        width="144px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-2xl font-medium tracking-wider capitalize font-lemonada">
        <span className="font-medium capitalize text-1xl text-purple">Gabriela</span> Arrieta
      </h3>

      <p className="flex items-center justify-center px-2 py-3 my-2 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        <CgCode className="w-4 h-4 m-1 text-dark dark:text-white" />Software Developer <CgCodeSlash className="w-4 h-4 m-1 font-semibold text-dark dark:text-white" />
      </p>
      {/* Resume */}
      <a
        href="https://drive.google.com/file/d/17SxqaVsqaK_E1GxBge3AFFC_3bud5Dhs/view?usp=sharing"
        download="Gabi Arrieta Resume.pdf"
        target="_blank"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <MdWork className="w-4 h-4" />
        <span className="m-2">My resume</span>
      </a>


      {/* Contacts */}
      <div
        className="py-4 bg-gray-200 my-9 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Buenos Aires, Argentina </span>
        </div>
        <p className="my-1 text-purple"> Let's talk! </p>
      </div>

      {/* Socials */}
      <div className="flex justify-center w-9/12 mx-auto my-8 space-x-4 text-purple md:w-full ">

        <a href="https://www.linkedin.com/in/gabriela-arrieta/" target="_blank" rel="noopener noreferrer" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/GabiArrieta" target="_blank" rel="noopener noreferrer" >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:gabriela.arrieta.187@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
