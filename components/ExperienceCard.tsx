import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full max-w-5xl snap-center bg-[#292929] p-10 cursor-pointer overflow-hidden overflow-y-scroll">
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
      >
        <Image
          src={urlFor(experience.companyImage).url()}
          height="400"
          width="400"
          alt=""
          className="rounded-full w-32 h-32 xl:h-[10rem] xl:w-[10rem] object cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10 max-w-3xl">
        <h4 className="text-2xl md:text-3xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-lg md:text-xl mt-1">
          {experience.company}
        </p>
        {experience.technologies ? (
          <div className="flex space-x-2 my-2">
            {experience.technologies?.map((technology) => (
              <Image
                key={technology._id}
                src={urlFor(technology.image).url()}
                height={100}
                width={100}
                alt=""
                className="rounded-full h-7 w-7 object-cover"
              />
            ))}
          </div>
        ) : (
          ""
        )}
        <p className="uppercase pt-1 pb-2 text-sm md:text-lg text-gray-300">
          {new Date(experience.dateStarted).toLocaleDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toLocaleDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-md">
          {experience.bulletPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
