import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
          src="https://res.cloudinary.com/dz58encu1/image/upload/v1666809823/sealCoastGuard_xkpbn5.png"
          height="400"
          width="400"
          alt=""
          className="rounded-full w-32 h032 xl:h-[200px] xl:w-[200px] object cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Merkle, Inc</p>
        <div className="flex space-x-2 my-2">
          <Image
            src="https://res.cloudinary.com/dz58encu1/image/upload/v1666809823/sealCoastGuard_xkpbn5.png"
            height="50"
            width="50"
            alt=""
            className="rounded-full h-10 w-10 object-cover"
          />
          <Image
            src="https://res.cloudinary.com/dz58encu1/image/upload/v1666809823/sealCoastGuard_xkpbn5.png"
            height="50"
            width="50"
            alt=""
            className="rounded-full h-10 w-10 object-cover"
          />
          <Image
            src="https://res.cloudinary.com/dz58encu1/image/upload/v1666809823/sealCoastGuard_xkpbn5.png"
            height="50"
            width="50"
            alt=""
            className="rounded-full h-10 w-10 object-cover"
          />
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
