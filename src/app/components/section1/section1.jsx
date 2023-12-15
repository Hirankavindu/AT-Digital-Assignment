"use client";
import React from "react";
import Image from "next/image";
import { motion, inView } from "framer-motion";

const variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};
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

function Section1() {
  return (
    <div className="flex flex-row items-center justify-center gap-16 py-12 px-44 max-[1200px]:px-5 max-[768px]:px-10 max-[680px]:px-5 max-[375px]:flex-col max-[450px]:flex-col">
      <motion.div
        className="w-[414px] h-[414px] bg-white relative max-[1200px]:h-[346px] max-[1200px]:w-[346px] max-[1024px]:w-[300px] max-[1024px]:h-[300px] max-[768px]:h-[275px] max-[768px]:w-[275px] max-[680px]:h-[200px] max-[680px]:w-[200px] max-[375px]:h-[275px] max-[375px]:w-[275px] "
        variants={variants1}
        initial="initial"
        whileInView="animate"
      >
        <Image
          src="/images/image2.png"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </motion.div>
      <div className="flex flex-col ml-10 max-[768px]:w-[393px] max-[1200px]:ml-5 max-[680px]:ml-2 max-[680px]:w-[300px]">
        {" "}
        {/* Added margin for spacing */}
        <motion.h1
          className="text-[#6B3CC9] font-bold text-[27px] max-[680px]:text-[25px] max-[375px]:text-center max-[450px]:text-center"
          variants={variants1}
          initial="initial"
          whileInView="animate"
        >
          Web & Mobile App Development
        </motion.h1>
        <motion.p
          className="w-[542px] pt-5 text-base max-[768px]:w-[393px] max-[680px]:w-[300px] max-[375px]:text-center max-[450px]:text-center"
          variants={variants1}
          initial="initial"
          whileInView="animate"
        >
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </motion.p>
        <motion.div
          className="mt-3 flex max-[375px]:items-center max-[375px]:justify-center max-[450px]:items-center max-[450px]:justify-center"
          variants={variants1}
          initial="initial"
          whileInView="animate"
        >
          <button className="text-transform: uppercase font-bold text-sm mt-2.5 text-white cursor-pointer rounded outline-none bg-[#F28D35] w-[129px] h-[38px]   hover:bg-purple-900 hover:text-white">
            Learn more
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Section1;
