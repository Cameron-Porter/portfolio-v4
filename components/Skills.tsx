import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <section id="skills" className="snap-start">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 xl:space-y-0 justify-center mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-30px] text-gray-500 text-sm">
          Hover over a skill to see skill name
        </h3>
        <div className="grid grid-cols-4 gap-5">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </section>
  );
}
