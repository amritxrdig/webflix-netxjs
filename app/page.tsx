import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <>
      <Herosection
        title={"Let's Watch Movies Together"}
        imageUrl={"/webflix.png"}
        description="From award-winning dramas to blockbuster action movies, we&#39;ve got
        you covered. Browse our selection of the latest and greatest movies
        and find your new favorite today."
      />
    </>
  );
}

/*
This is for auto-Slider
"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";

function App() {
  const slides = useMemo(
    () => [
      {
        url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      },
      {
        url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [nextSlide]);

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
    </div>
  );
}

export default App; */
