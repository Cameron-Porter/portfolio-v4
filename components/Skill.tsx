import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  skill: SkillType;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer justify-center">
      <motion.div
        className="rounded-full filter group-hover:grayscale duration-300 ease-in-out object-cover overflow-hidden mx-3 my-6 pb-3"
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
        }}
      >
        <Image
          src={urlFor(skill.image).url()}
          alt=""
          height="150"
          width="150"
          className="w-[3rem] h-[3rem] p-[.35rem] m-2"
        />
      </motion.div>
    </div>
  );
}
