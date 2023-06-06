import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard: React.FC<any> = (curElem) => {
  const { id, type, title, synopsis } = curElem.curElem.jawSummary;

  return (
    <div className="bg-transparent rounded-lg shadow-md p-4">
      <div className="mb-4">
        <Image
          src={curElem.curElem.jawSummary.backgroundImage.url}
          alt="image"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="text-gray-400">{`${synopsis.substring(0, 66)}...`}</p>
      <Link href={`/movie/${id}`}>
        <button className="btn mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full py-2 px-4 mt-4">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default MovieCard;
