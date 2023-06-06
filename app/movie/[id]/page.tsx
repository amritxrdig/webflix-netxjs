import Image from "next/image";
import React from "react";

interface MovieDetailProp {
  params: {
    id: string;
  };
}

const MovieDetail = async ({ params }: MovieDetailProp) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5a1c97e988msh263f08d9e788cf4p173b72jsnbaaafeaaef89",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0]?.details;

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl mb-4">
          WebFlix / <span className="font-bold">{main_data?.title}</span>
        </h2>
        <div className="flex justify-center items-center mb-8">
          <div className="w-1/2">
            <Image
              src={main_data?.backgroundImage.url}
              alt={main_data?.title}
              width={600}
              height={300}
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{main_data?.title}</h1>
          <p className="text-lg mb-8">{main_data?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
