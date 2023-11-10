import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return <p className="text-primary">{title}</p>;
};

const About = () => {
  return (
    <div className="bg-secondary">
      <motion.div>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
      >
        I am currently a first-year student studying computer science at the
        University of Michigan, Ann Arbor. Outside of class, I am heavily
        involved in V1, a community of ambitious student builders that build
        cool sh*t. I am also in UpRound Ventures, a student-run VC firm that
        helps startups succeed.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
