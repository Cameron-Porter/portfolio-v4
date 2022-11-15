import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full max-w-5xl snap-center bg-[#292929] p-10 overflow-hidden overflow-y-scroll cursor-pointer">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className=""
      >
        <Image
          src={urlFor(project.image).url()}
          height="400"
          width="400"
          alt=""
          className="rounded-lg w-48 h-32 xl:h-[10rem] xl:w-[10rem] object-cover"
        />
      </motion.div>
      <div className="space-y-4 px-0 md:px-10 max-w-5xl">
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
        <h4 className="text-2xl text-center md:text-3xl font-light md:text-left">
          {project.title}
        </h4>
        <p className="text-center text-md md:text-left">{project.summary}</p>
      </div>
    </article>
  );
}
