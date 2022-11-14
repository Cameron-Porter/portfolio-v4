import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        className="rounded-full border border-gray-500 filter group-hover:grayscale duration-300 ease-in-out overflow-hidden "
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          src={urlFor(skill.image).url()}
          alt=""
          height="100"
          width="100"
          className="w-18 h-18 md:w-24 md:h-24 object-cover"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-18 w-18 md:w-24 md:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-bold text-black opacity-100 flex text-center">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}
