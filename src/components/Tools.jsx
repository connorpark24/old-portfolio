import React from "react";
import {
  docker,
  figma,
  git,
  html,
  css,
  mongodb,
  reactjs,
  tailwind,
  javascript,
} from "../assets";
import { styles } from "../styles";

const Tools = () => {
  return (
    <section className="flex flex-row justify-between" id="toolkit">
      <div className="grid grid-cols-6 w-3/5 gap-8 bg-red-400">
        <img
          src={html}
          className="border-primary border-2 w-32 h-32 rounded-3xl p-2 bg-primary"
        />
        <img
          src={css}
          className="border-primary border-2 w-32 h-32 rounded-3xl p-2 bg-primary"
        />
        <img
          src={javascript}
          className="border-primary border-2 w-32 h-32 rounded-3xl p-2 bg-primary"
        />
        <img
          src={reactjs}
          className="border-primary border-2 w-32 h-32 rounded-3xl p-2"
        />
        <img
          src={mongodb}
          className="border-primary border-2 w-32 h-32 rounded-3xl p-2"
        />
        <img
          src={git}
          className="border-primary border-2 w-32 h-32 rounded-3xl p-2"
        />
        <img
          src={figma}
          className="border-primary border-2 w-32 h-32 rounded-3xl p-2"
        />
        <img
          src={tailwind}
          className="border-primary border-2 w-32 h-32 rounded-3xl p-2"
        />
        <img
          src={docker}
          className="border-primary border-2 w-32 h-32 rounded-3xl p-2"
        />
      </div>
      <h1 className={`${styles.heroHeadText}`}>Toolkit</h1>
    </section>
  );
};

export default Tools;
