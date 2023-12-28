import React from "react";
import { technologies } from "../constants/index";
import { styles } from "../styles";

const Tools = () => {
  return (
    <section className="w-full flex flex-col items-center gap-y-8" id="toolkit">
      <h1 className={`${styles.heroHeadText}`}>Toolkit</h1>
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((technology, index) => (
          <div key={index} className="relative group">
            <img
              src={technology.icon}
              className="w-24 h-24 rounded-3xl p-2"
              alt={technology.name}
            />
            <p className="absolute w-full bottom-0 left-0 text-sm text-center text-white bg-black bg-opacity-70 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
