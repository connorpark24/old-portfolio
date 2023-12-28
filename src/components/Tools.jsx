import React from "react";
import {
  github,
  css,
  cpp,
  python,
  figma,
  html,
  javascript,
  mongodb,
  reactjs,
  tailwind,
  typescript,
} from "../assets";
import { styles } from "../styles";

const Tools = () => {
  const tools = [
    cpp, python, html, css, javascript, typescript, reactjs, mongodb, figma, github, tailwind,
  ];

  return (
    <section className="w-full flex flex-col items-center gap-y-4" id="toolkit">
      <h1 className={`${styles.heroHeadText}`}>Toolkit</h1>
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
        {tools.map((tool, index) => (
          <img
            key={index}
            src={tool}
            className="w-24 h-24 rounded-3xl p-2"
            alt="Tool"
          />
        ))}
      </div>
    </section>
  );
};

export default Tools;
