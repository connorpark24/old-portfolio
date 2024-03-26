import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector(".move-text");
      const section = document.getElementById("about");
      const sectionPosition = section?.getBoundingClientRect().top ?? 0;
      const screenPosition = window.innerHeight;

      if (sectionPosition < screenPosition) {
        textElement?.classList.add("active");
      } else {
        textElement?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="lg:scroll-mt-48 px-12 md:px-16  bg-white py-64"
      id="about"
    >
      <div className="my-auto flex flex-col items-end">
        <h1 className="lg:text-xl text-lg text-black font-noto-sans mb-4 font-light">
          Education
        </h1>
        <p className="text-black lg:text-7xl md:text-6xl text-5xl font-karma font-semibold">
          University of Michigan
        </p>
        <p className="lg:text-lg text-md  text-black font-noto-sans font-light">
          College of Engineering, Computer Science B.S.E
        </p>
        <p className="lg:text-lg text-md mt-2 text-black w-1/2 text-right font-noto-sans font-light">
          Courses: Programming and Intro Data Structures, Discrete Math,
          Microprocessors and Toys, Data Structures and Algorithms, Intro to
          Computer Organization
        </p>
        <p className="lg:text-lg text-md mt-2 text-black font-noto-sans font-light">
          Activities:{" "}
          <a
            href="https://v1michigan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal underline"
          >
            V1 Michigan
          </a>
          ,{" "}
          <a
            href="https://www.upround.vc/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal"
          >
            UpRound Ventures
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
