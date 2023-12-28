import React from "react";
import Carousel from "./Carousel.jsx";
import { styles } from "../styles.js";

const Projects = () => {
  const slides = ['GoBrew', 'Golf Project', 'Portfolio Website', 'Frontend with API call'];

  return (
    <section className="flex flex-col gap-y-12" id="projects">
      <h1 className={`${styles.heroHeadText} mx-auto`}>Projects</h1>
      <Carousel slides={slides} />
    </section>
  );
};

export default Projects;
