import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        className="rounded-full border border-gray-500 filter group-hover:grayscale duration-300 ease-in-out"
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
          src="https://res.cloudinary.com/dz58encu1/image/upload/v1666809824/SealSpaceForce_etykly.png"
          alt=""
          height="150"
          width="150"
          className="object-cover  w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">USSF</p>
        </div>
      </div>
    </div>
  );
}
