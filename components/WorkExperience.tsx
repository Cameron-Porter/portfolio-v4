import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  return (
    <section id="experience" className="snap-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="uppercase tracking-[20px] pl-5 text-cyan-500 text-2xl mt-[4rem] mb-[2rem] animate-pulse">
          Experience
        </h3>
        <div className="w-full flex space-x-1 overflow-x-scroll snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#22f3ee] scrollbar-thin">
          {experiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
