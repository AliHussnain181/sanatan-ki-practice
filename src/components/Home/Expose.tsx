"use client";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const Expose = () => {


  return (
    <motion.div
      initial={{ x: "-50px" }}
      whileInView={{ x: 0 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="space-y-2 px-3 "
    >
      <h1 className="text-2xl font-semibold font-poppins leading-[24px]">
        What is Linduism
      </h1>
      <p className="text-[14px] leading-[16px] tracking-wide font-open mx-auto">
        in this we do explain what is Linduism what is practice of Sanatan what
        is Leela.all of them exposed.
        <motion.span className="text-[#F38411]">Teer More de vetch</motion.span>
      </p>

    </motion.div>
  );
};

export default Expose;
