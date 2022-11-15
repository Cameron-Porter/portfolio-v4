import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

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
        <div className="w-full h-[75%] flex space-x-1 overflow-x-scroll snap-x snap-mandatory justify-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#22f3ee]">
          {projects.map((project, i) => (
            <div
              key={project._id}
              className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full max-w-5xl snap-center bg-[#292929] p-10 cursor-pointer overflow-hidden overflow-y-scroll"
            >
              <motion.div
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=""
              >
                <Image
                  src={urlFor(project.image).url()}
                  height="400"
                  width="400"
                  alt=""
                  className="rounded-lg w-48 h-32 xl:h-[10rem] xl:w-[10rem] object cover object-cover"
                />
              </motion.div>
              <div className="space-y-4 px-0 md:px-10 max-w-5xl">
                <h4 className="text-xl font-semibold text-center">
                  <span className="underline decoration-[#22d3ee]">
                    Project {i + 1} of {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>
                <div className="flex flex-row items-center space-x-2 justify-center">
                  {project.technologies.map((tech) => (
                    <Image
                      key={tech._id}
                      height="20"
                      width="20"
                      src={urlFor(tech.image).url()}
                      alt=""
                    />
                  ))}
                </div>
                <p className="text-center text-md md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
