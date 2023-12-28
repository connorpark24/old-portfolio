import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-row justify-center">
      <div className="flex flex-row justify-around items-center mb-20 w-2/3">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl font-medium">
          Linkedin
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl font-medium">
          Github
        </a>
        <a href="mailto:cmpark@umich.edu" className="text-primary text-2xl font-medium">
          cmpark@umich.edu
        </a>
      </div>
    </section>
  );
};

export default Contact;
