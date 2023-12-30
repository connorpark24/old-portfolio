import React from "react";
import { styles } from "../styles";
import UMlogo from "../assets/UMlogo.png";

const About = () => {
  return (
    <section className="flex flex-col gap-y-12 md:flex-row justify-between items-center scroll-mt-48" id="about">
      <img
        src={UMlogo}
        className="lg:w-[400px] lg:h-[450px] md:w-[300px] md:h-[350px] w-[400px] h-[450px] rounded-[50px]"
      />
      <div className="ml-4 flex flex-col gap-y-4">
        <h1 className={`${styles.heroHeadText} text-right`}>Education</h1>
        <p className={`${styles.heroSubText} text-right`}>
          University of Michigan, Computer Science B.S.E
        </p>
        <p className="text-primary text-right text-xl">
          Courses: Programming and Intro Data Structures, Discrete Math,
          Microprocessors and Toys, Data Structures and Algorithms, Intro to Computer Organization
        </p>
        <p className="text-primary text-right text-xl">
          Activities: {" "}
          <a href="https://v1michigan.com/" target="_blank" rel="noopener noreferrer" className="font-bold">V1 Michigan</a>, {" "}
          <a href="https://www.upround.vc/" target="_blank" rel="noopener noreferrer" className="font-bold">UpRound Ventures</a>
        </p>
      </div>
    </section>
  );
};

export default About;
