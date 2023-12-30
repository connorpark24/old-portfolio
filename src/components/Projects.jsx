import React from "react";
import Carousel from "./Carousel.jsx";
import { styles } from "../styles.js";

const Projects = () => {
  const slides = ['GoBrew', 'Golf Ball CV Detection', 'Portfolio Website', 'Spotify Playlist Generator'];

  return (
    <section className="flex flex-col gap-y-12 scroll-mt-40" id="projects">
      <h1 className={`${styles.heroHeadText} mx-auto`}>Projects</h1>
      <Carousel slides={slides} />
    </section>
  );
};

export default Projects;
