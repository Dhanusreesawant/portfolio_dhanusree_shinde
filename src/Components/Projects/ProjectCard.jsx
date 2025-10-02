import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main }) => {
  return (
    
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl
">
      <img className="rounded-t-lg" src={bannerImg} alt="" />
      <h3 className="px-4 pt-2 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-6 m-2 flex gap-4">
        <button className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition">
          Demo
        </button>
        <button className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium shadow-md transition">
          Code
        </button>
      </div>

     

    </div>
    
  );
};

export default ProjectCard;
