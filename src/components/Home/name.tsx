"use client";
import React from "react";
import { motion } from "framer-motion";

const Name = () => {
  return (
    <motion.div initial={{ x: "40px"}} whileInView={{x:0}} transition={{duration:0.7}} >
      <h1 className="text-[#F38411] text-2xl font-silk leading-5 ">
        Sanatan Ki Practice
      </h1>
    </motion.div>
  );
};

export default Name;
