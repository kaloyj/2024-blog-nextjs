"use client";

import { Poppins } from "next/font/google";
import { motion } from "motion/react";

const poppins = Poppins({ weight: ["200", "400", "700"] });

export default function Home() {
  return (
    <main
      className={["flex flex-col bg-[#05091C]", poppins.className].join(" ")}
    >
      {/* hero */}
      <div className="w-full h-screen overflow-hidden relative">
        {/* bg */}
        <motion.div
          initial={{
            x: "-60%",
          }}
          animate={{
            x: "-300%",
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 30,
            },
          }}
          className="flex flex-nowrap box-border h-full py-[10%] lg:py-[1%]"
        >
          {/* reduce number by device */}
          {[...Array(48).keys()].map((i) => (
            <motion.div
              className={[
                "shrink-0 h-full basis-[280px] md:basis-[560px] lg:basis-[140px]",
                i % 2 === 0 ? "bg-[#273782]" : "bg-[#131D4C]",
              ].join(" ")}
              key={i}
              initial={{
                skewY: i % 2 === 0 ? "-20deg" : "20deg",
                skewX: "10deg",
                backgroundColor: i % 2 === 0 ? "#273782" : "#131D4C",
              }}
              animate={{
                skewY: i % 2 === 0 ? "20deg" : "-20deg",
                backgroundColor: i % 2 === 0 ? "#131D4C" : "#273782",
                transition: {
                  delay: 0.05 * i,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  type: "easeInOut",
                },
              }}
            />
          ))}
        </motion.div>
        {/* content */}
        <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center text-white">
          <h1 className="font-bold text-[32px] md:text-[52px]">Carlo Janea</h1>
          <h2 className="text-center md:text-[16px] md:mt-1">
            Frontend Engineer
            <br />
            Barcelona, Spain
          </h2>
          <a
            className="rounded-full mt-3 bg-[#4361EE] text-white font-bold px-4 py-2 md:text-[16px] md:px-8 md:py-2"
            href="https://www.linkedin.com/in/carlo-janea-2880a2132/"
          >
            Say hi! 👋🏻
          </a>
        </div>
      </div>
    </main>
  );
}
