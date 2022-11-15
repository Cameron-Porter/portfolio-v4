import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import ProjectCard from "./ProjectCard";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="snap-start">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen max-h-screen relative flex overflow-hidden flex-col text-left max-w-full mx-auto items-center px-10"
      >
        <h3 className="uppercase tracking-[20px] pl-5 text-cyan-500 text-2xl mt-[4rem] mb-[2rem] animate-pulse">
          Projects
        </h3>
        <div className="w-full h-[75%] flex space-x-1 overflow-x-scroll snap-x snap-mandatory justify-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-cyan-500">
          {projects.sort().map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
