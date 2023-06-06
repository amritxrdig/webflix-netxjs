import React from "react";
import Herosection from "../components/Herosection";

function About() {
  return (
    <Herosection
      title={"OUR STORY"}
      imageUrl={"/about.png"}
      description="Welcome to WebFlix! We're your go-to destination for an extraordinary streaming experience. Just like Netflix, we're dedicated to delivering top-quality content through our visually stunning and user-friendly websites. Experience the magic of seamless navigation, personalized recommendations, and responsive design. Let WebFlix redefine the way you stream and captivate your audience with an exceptional online presence."
    />
  );
}

export default About;
