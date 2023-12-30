"use client";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const Loading = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100);

    return controls.stop;
  }, [count]);

  return (
    <div className="w-screen h-screen text-[#F38411] font-nunito font-semibold text-2xl bg-white flex items-center justify-center overflow-hidden">
      <motion.div>{rounded}</motion.div>
    </div>
  );
};

export default Loading;
