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
        className="flex flex-col h-screen text-center max-w-7xl px-10 mx-auto items-center"
      >
        <h3 className="uppercase tracking-[20px] pl-5 text-cyan-500 text-2xl my-[4rem] animate-pulse">
          About
        </h3>
        <div className="flex flex-col text-center justify-evenly mx-auto items-center md:flex-row md:text-left ">
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
            className="flex flex-shrink-0 w-56 h-56 mb-5 md:mb-0 md:w-64 md:h-96 xl:w-[31.25rem] xl:h-[37.5rem] items-center"
          >
            <Image
              src={urlFor(pageInfo?.profilePic).url()}
              height="1000"
              width="1000"
              className="rounded-full object-cover md:rounded-lg align-middle"
              alt=""
            />
          </motion.div>

          <div className="space-y-5 px-0 md:px-10">
            <h4 className="text-2xl md:text-4xl font-semibold">
              Here is a{" "}
              <span className="underline decoration-cyan-500/70">little</span>{" "}
              background
            </h4>
            <p className="text-sm text-left">{pageInfo?.backgroundInfo}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
