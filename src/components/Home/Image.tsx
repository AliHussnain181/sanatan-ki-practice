"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MainImage = () => {
  return (
    <motion.div
      className="py-5 sm:py-0"
      initial={{ x:"50px" }}
      whileInView={{ x: 0 }}
      transition={{delay:0.2,duration:0.7}}
      whileHover={{scale:1.2}}
    >
      <Image
        className="rounded-sm"
        src={"/rishi.jpg"}
        width={2000}
        height={2000}
        alt="practice"
      />
    </motion.div>
  );
};

export default MainImage;
