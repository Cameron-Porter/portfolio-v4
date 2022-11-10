import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
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
    </article>
  );
}
