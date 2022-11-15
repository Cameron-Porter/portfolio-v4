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
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto items-center"
      >
        <h3 className="uppercase tracking-[20px] pl-5 text-cyan-500 text-2xl mt-[4rem] mb-[2rem] animate-pulse">
          Projects
        </h3>
        <div className="w-full flex space-x-1 overflow-x-scroll snap-x snap-mandatory">
          {projects.map((project, i) => (
            <div
              key={project._id}
              className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full max-w-5xl snap-center p-10 cursor-pointer overflow-hidden overflow-y-scroll mb-[4rem] pb-[8rem]"
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
        <div className="w-full absolute top-[30%] left-0 h-[500px] -skew-y-12 bg-[#22d3ee]/10" />
      </motion.div>
    </section>
  );
}
