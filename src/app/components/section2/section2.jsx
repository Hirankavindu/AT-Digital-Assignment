"use client";
import React from "react";
import Image from "next/image";
import { motion, inView } from "framer-motion";

const variants = {
    initial:{ opacity: 0, scale: 0.5 },
    animate:{ opacity: 1, scale: 1, transition:{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }} 
}

const variants1 = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

function Section2() {
  return (
    <div className="flex flex-row items-center justify-center py-12 max-[1200px]:px-5 max-[768px]:px-10 max-[680px]:px-5 max-[375px]:flex-col max-[450px]:flex-col">
      <div className="flex flex-col ml-10 max-[1200px]:ml-5 max-[768px]:w-[393px] max-[680px]:ml-2 max-[680px]:w-[300px]">
        {" "}
        {/* Added margin for spacing */}
        <motion.div
          className=" bg-white relative invisible max-[375px]:h-[275px] max-[375px]:w-[275px] max-[375px]:visible max-[450px]:h-[275px] max-[450px]:w-[275px] max-[450px]:visible "
          variants={variants1}
          initial="initial"
          whileInView="animate"
        >
          <Image
            src="/images/image1.png"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </motion.div>
        <motion.h1
          className="text-[#6B3CC9] font-bold text-[27px] max-[680px]:text-[25px] max-[375px]:text-center max-[450px]:text-center"
          variants={variants1}
          initial="initial"
          whileInView="animate"
        >
          Digital Strategy Consulting
        </motion.h1>
        <motion.p
          className="w-[542px] pt-5 text-base max-[768px]:w-[393px] max-[680px]:w-[300px] max-[375px]:text-center max-[450px]:text-center"
          variants={variants1}
          initial="initial"
          whileInView="animate"
        >
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </motion.p>
        <motion.div
          className="mt-3 flex max-[375px]:items-center max-[375px]:justify-center max-[450px]:justify-center"
          variants={variants1}
          initial="initial"
          whileInView="animate"
        >
          <button className="text-transform: uppercase font-bold text-sm mt-2.5 text-white cursor-pointer rounded outline-none bg-[#F28D35] w-[129px] h-[38px]  hover:bg-purple-900 hover:text-white">
            Learn more
          </button>
        </motion.div>
      </div>
      <motion.div
        className="w-[414px] h-[414px] bg-white relative max-[1200px]:h-[346px] max-[1200px]:w-[346px] max-[1024px]:w-[300px] max-[1024px]:h-[300px] max-[768px]:h-[275px] max-[768px]:w-[275px] max-[680px]:h-[200px] max-[680px]:w-[200px] max-[375px]:h-0 max-[375px]:w-0 max-[450px]:invisible max-[450px]:h-0 max-[450px]:w-0 "
        variants={variants1}
        initial="initial"
        whileInView="animate"
      >
        <Image
          src="/images/image1.png"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </motion.div>
    </div>
  );
}


export default Section2;
