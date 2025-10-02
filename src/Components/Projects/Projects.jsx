import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-6 justify-center">
        <ProjectCard
          title="Blogging Website"
          main="this is a blogging website created in Next.js and used some component library"
        />
        <ProjectCard
          title="YouTube Clone"
          main="this is a YouTube clone created in Next.js and used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a YouTube clone created in Next.js and used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;
