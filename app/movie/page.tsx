import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";

const Movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5a1c97e988msh263f08d9e788cf4p173b72jsnbaaafeaaef89",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data: any = await res.json();
  const main_data = data.titles;

  return (
    <div>
      <div className="bg-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {main_data.map((curElem: any) => (
          <MovieCard key={curElem.id} curElem={curElem} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
