import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  return (
    <section id="skills" className="snap-start">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen w-full max-h-screen flex flex-col text-center md:text-left max-w-5xl px-10 xl:space-y-0 mx-auto items-center"
      >
        <h3 className="uppercase tracking-[20px] pl-5 text-cyan-500 text-2xl mt-[4rem] animate-pulse">
          Skills
        </h3>
        <h3 className="uppercase tracking-30px] text-gray-500 text-sm mb-[3rem]">
          Professional tools of the trade
        </h3>
        <div className="flex flex-wrap justify-around mx-auto px-1 max-w-3xl">
          {skills.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
