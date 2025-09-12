import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-8 pt-6 md:px-20">
      <span className="text-4xl p-3 py-2 font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 ">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
