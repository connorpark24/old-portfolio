import React from "react";
import { styles } from "../styles";
import UMlogo from "../assets/UMlogo.png";

// const ServiceCard = ({ index, title, icon }) => {
//   return <p className="text-primary">{title}</p>;
// };

const About = () => {
  return (
    <section className="flex flex-row h-[80vh]" id="about">
      <img
        src={UMlogo}
        className="w-[500px] h-[550px] my-auto ml-44 rounded-[50px]"
      />
      <div className="w-[1000px] my-auto">
        <h1 className={`${styles.heroHeadText} text-right`}>Education</h1>
        <p className={`${styles.heroSubText} my-2 text-primary text-right`}>
          University of Michigan <br />
          Computer Science
        </p>
        <p className="text-primary text-right text-xl">
          Courses Taken: Programming and Intro Data Structures, Discrete Math,
          Microprocessors and Toys, Data Structures and Algorithms, Computer
          Organization
        </p>
      </div>
    </section>
  );
};

export default About;
