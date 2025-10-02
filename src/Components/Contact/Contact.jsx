import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <footer
      id="Contact"
      className="bg-gradient-to-r from-[#465697] to-[#2c365d] text-white px-6 py-10 md:px-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Title + Text */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-lg font-normal text-gray-200">
            Feel free to reach out anytime ✨
          </h3>
        </div>

        {/* Right: Links */}
        <ul className="flex flex-col gap-4 text-sm md:text-lg">
          <li className="flex items-center gap-2 hover:text-blue-300 transition">
            <MdOutlineEmail size={22} />
            <a href="mailto:shindedhanusree@gmail.com">
              shindedhanusree@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2 hover:text-blue-300 transition">
            <CiLinkedin size={22} />
            <a
              href="https://linkedin.com/in/Dhanusree"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/Dhanusree
            </a>
          </li>
          <li className="flex items-center gap-2 hover:text-blue-300 transition">
            <FaGithub size={22} />
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noreferrer"
            >
              github.com/username
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-400 pt-4 text-center text-xs md:text-sm text-gray-300">
        © {new Date().getFullYear()} Dhanusree Shinde. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
