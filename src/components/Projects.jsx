import React from "react";
import { carrent, jobit, tripguide } from "../assets/index.js";
import { styles } from "../styles.js";

const Projects = () => {
  return (
    <section className="flex flex-col ml-48" id="projects">
      <h1 className={`${styles.heroHeadText} mt-4`}>Projects</h1>
      <div className="flex flex-row h-[50vh]">
        <div className="w-1/3 my-auto">
          <p className={`${styles.heroSubText} text-primary`}>Carrent</p>
          <p className="text-primary font-semibold text-xl mt-3">
            React, Node, Express, MongoDB, Tailwind, Redux Toolkit
          </p>
          <p className="text-primary mt-3 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img
          src={carrent}
          className="text-7xl border-primary border-4 w-[600px] h-[450px] rounded-3xl mx-auto my-auto"
        />
      </div>

      <div className="flex flex-row h-[50vh]">
        <div className="w-1/3 my-auto">
          <p className={`${styles.heroSubText} text-primary`}>Jobit</p>
          <p className="text-primary font-semibold text-xl mt-3">
            React, Node, Express, MongoDB, Tailwind, Redux Toolkit
          </p>
          <p className="text-primary mt-3 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img
          src={jobit}
          className="text-7xl border-primary border-4 w-[600px] h-[450px] rounded-3xl mx-auto my-auto"
        />
      </div>

      <div className="flex flex-row h-[50vh]">
        <div className="w-1/3 my-auto">
          <p className={`${styles.heroSubText} text-primary`}>Tripguide</p>
          <p className="text-primary font-semibold text-xl mt-3">
            React, Node, Express, MongoDB, Tailwind, Redux Toolkit
          </p>
          <p className="text-primary mt-3 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img
          src={tripguide}
          className="text-7xl border-primary border-4 w-[600px] h-[450px] rounded-3xl mx-auto my-auto"
        />
      </div>
    </section>
  );
};

export default Projects;
