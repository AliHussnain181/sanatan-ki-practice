"use client";
import PracticeCard from "./practiceCard";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/sanityClient";

const PracticeSection = () => {
  const [practice, setPractice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const getPractice = async () => {
    try {
      const query = '*[_type == "practice"]'; // GROQ query to fetch all practice documents
      const data = await client.fetch(query);
      setPractice(data);
      setLoading(false);
    } catch (error:Error | any) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getPractice();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {practice?.map((practice, index) => (
            <PracticeCard key={index} data={practice} />
          ))}
        </div>
      )}
    </>
  );
};

export default PracticeSection;
