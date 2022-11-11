import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <section id="about" className="snap-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="-mb-20 flex flex-shrink-0 w-56 h-56 md:mb-0 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] items-center"
        >
          <Image
            src={urlFor(pageInfo?.profilePic).url()}
            height="1000"
            width="1000"
            className="rounded-full object-cover md:rounded-lg align-middle"
            alt=""
          />
        </motion.div>

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#22d3ee]/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm">{pageInfo?.backgroundInfo}</p>
        </div>
      </motion.div>
    </section>
  );
}