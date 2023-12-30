"use client";
import MovieCard from "./movieCard";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/sanityClient";

const MovieSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const getMovies = async () => {
    try {
      const query = '*[_type == "movies"]'; // GROQ query to fetch all practice documents
      const data = await client.fetch(query);
      setMovies(data);
      setLoading(false);
    } catch (error: Error | any) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {movies?.map((practice, index) => (
          <MovieCard key={index} data={practice} />
        ))}
      </div>
    </>
  );
};

export default MovieSection;
