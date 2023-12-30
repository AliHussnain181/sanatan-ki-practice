import React from "react";
import { Metadata } from "next";
import MovieSection from "@/src/components/Movie";

export const metadata: Metadata = {
  title: "Sanatan Ki Movies Section - Explore Divine Cinematic Experiences ",
  description: "Discover a divine collection of movies in the Sanatan Ki Movies Section. Immerse yourself in spiritual narratives and cinematic wonders.",
  keywords:"Animal movies ,K.G.F Ch.2 The Rule Of Tharak | Blockbuster Movie K.G.F | 18+,AdiPurush - Rang Rassiya Ram - R R R #adipurush,KGF Chapter 1 | Krishna Gopal Funkaar | Blockbuster Movie"
};


const Practice = () => {
  return (
    <>
      <MovieSection />
    </>
  );
};

export default Practice;
