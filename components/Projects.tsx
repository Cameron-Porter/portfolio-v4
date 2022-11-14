import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <section id="projects" className="snap-start">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 uppercase text-2xl tracking-[20px] text-gray-500">
          Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#22f3ee]">
          {projects.map((project, i) => (
            <div
              key={i}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.div
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                  height="500"
                  width="500"
                  alt=""
                />
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#22d3ee]">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  UPS Clone
                </h4>
                <p className="text-center text-lg md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe mollitia fuga nobis ex. Provident enim sint, commodi
                  impedit voluptatem iusto dicta esse ratione. Ipsum cumque
                  accusantium libero neque a saepe!
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute top-[30%] left-0 h-[500px] -skew-y-12 bg-[#22d3ee]/10" />
      </motion.div>
    </section>
  );
}
