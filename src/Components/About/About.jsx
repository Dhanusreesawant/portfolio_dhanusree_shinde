import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-100" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 transition ease-in-out hover:translate-x-2 "/>

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Designed and implemented responsive UIs with HTML5, CSS3, Bootstrap 5, JQuery, JavaScript.Developed interactive, user-friendly interfaces for multiple web projects. 

                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 transition ease-in-out hover:translate-x-2" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  ReactJs developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Built and deployed dynamic React.js projects, focusing on reusable components and performance 
optimization.Currently developing additional React.js applications to enhance client websites and internal tools 
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 transition ease-in-out hover:translate-x-2" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  UI/UX developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Adept at problem-solving, UI/UX 
enhancement, and collaborating with teams to deliver engaging digital experiences. 
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
