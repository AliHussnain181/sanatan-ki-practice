import Image from "next/image";
import React from "react";
import MainImage from "./Home/Image";
import Expose from "./Home/Expose";

const Hero = () => {
  return (
      <main className="w-[80%] mx-auto  pt-10 sm:flex items-center md:h-[70vh] md:w-[40rem] sm:space-x-10">
        <Expose />
        <MainImage />
      </main>
  );
};

export default Hero;
