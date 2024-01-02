import React from "react";
import Carrent from "../assets/carrent.png";

import { styles } from "../styles.js";

const Projects = () => {
  const slides = [
    "GoBrew",
    "Golf Ball CV Detection",
    "Portfolio Website",
    "Spotify Playlist Generator",
  ];

  return (
    <section className="flex flex-col gap-y-12 scroll-mt-40" id="projects">
      <h1 className={`${styles.heroHeadText} mx-auto`}>Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {slides.map((index) => (
          <Slide key={index} content={slides[index]} />
        ))}
      </div>
    </section>
  );
};

const Slide = ({ content }) => (
  <div
    className="w-full h-[400px] rounded-3xl border-primary border-4 flex flex-col"
    style={{ animation: "slideIn 0.5s ease" }}
  >
    <div className="h-1/2 mx-auto my-auto">
      <img className="p-4 w-[360px] h-[260px]" src={Carrent} />
    </div>
    <div className="h-2/5 p-4">
      <p className="text-3xl">{content}</p>
      <p className="text-md">
        React, Typescript, Node, Express, MongoDB, Redux, Spotify Web API
      </p>
    </div>
  </div>
);

export default Projects;
