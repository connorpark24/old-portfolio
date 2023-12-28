import React from "react";
import { styles } from "../styles";
import UMlogo from "../assets/UMlogo.png";

const About = () => {
  return (
    <section className="flex flex-row h-[60vh] items-center" id="about">
      <img
        src={UMlogo}
        className="lg:w-[400px] lg:h-[450px] md:w-[300px] md:h-[350px] sm:w-[200px] sm:h-[250px] rounded-[50px]"
      />
      <div className="ml-24 flex flex-col gap-y-4">
        <h1 className={`${styles.heroHeadText} text-right`}>Education</h1>
        <p className={`text-4xl text-primary text-right`}>
          University of Michigan, Computer Science B.S.E
        </p>
        <p className="text-primary text-right text-xl">
          Courses Taken: Programming and Intro Data Structures, Discrete Math,
          Microprocessors and Toys, Data Structures and Algorithms, Computer
          Organization
        </p>
        <p className="text-primary text-right text-xl">
          Activities: V1 Michigan, UpRound Ventures
        </p>
      </div>
    </section>
  );
};

export default About;
