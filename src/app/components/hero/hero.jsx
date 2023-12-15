"use client";
import React from "react";
import { motion , inView} from "framer-motion";

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

function Hero() {
  return (
    <>
      <div className="relative">
        {/* Background Image */}
        {/* <div
          className="h-screen w-full bg-cover bg-no-repeat bg-center invisible max-[768px]:visible"
          style={{
            backgroundImage: "url('images/heroImage.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: "brightness(98%)",
            
          }}
        ></div> */}
        <div
          className=" relative h-screen w-full bg-cover bg-no-repeat bg-center max-[768px]:bg-auto max-[768px]:bg-top  max-[680px]:bg-auto max-[680px]:bg-top max-[680px]:w-full max-[680px]:h-screen max-[375px]:bg-auto max-[375px]:bg-top max-[375px]:w-full max-[375px]:h-screen max-[450px]:bg-auto max-[450px]:bg-top max-[450px]:w-full max-[450px]:h-screen"
          style={{
            backgroundImage: "url('images/heroImage.png')",
            filter: "brightness(98%)", // Set the height to 100vh for full screen coverage
          }}
        ></div>

        {/* Gradient Box */}
        <motion.div
          className="absolute bottom-0 left-0 ml-14 w-[630px] h-[306px] mb-10 max-[768px]:w-full max-[768px]:m-0 max-[768px]:p-0"
          variants={variants1}
          initial="initial"
          whileInView="animate"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] flex items-center justify-center">
            <div className="mb-16 w-[556px] h-[192px]">
              <motion.h1
                className="text-5xl font-bold text-white max-[375px]:text-4xl max-[375px]:pl-3 max-[450px]:text-3xl max-[450px]:pl-3"
                variants={variants1}
                initial="initial"
                whileInView="animate"
              >
                We crush your competitors, goals, and sales records - without
                the B.S.
              </motion.h1>
              {/* Button */}
              <motion.div
                className="mt-3 max-[375px]:pl-3 max-[450px]:pl-3"
                variants={variants1}
                initial="initial"
                whileInView="animate"
              >
                <button className="text-transform: uppercase font-bold text-sm mt-2.5 text-white cursor-pointer rounded outline-none bg-[#F28D35] w-[214px] h-[38px] hover:bg-purple-900 hover:text-white">
                  Get free consultation
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
