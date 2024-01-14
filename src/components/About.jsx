import umlogo from "../assets/umlogo.SVG";

const About = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center scroll-mt-48 px-12 md:px-20 font-light text-primary py-16"
      id="about"
    >
      <div className="w-2/5">
        <img src={umlogo} className="p-24" />
      </div>

      <div className="flex flex-col md:w-3/5 text-right">
        <h1 className="lg:text-3xl md:text-2xl text-xl">Education</h1>
        <p className="lg:text-7xl md:text-5xl text-3xl mt-2">
          University of Michigan
        </p>
        <p className="lg:text-3xl md:text-xl text-md mt-2">
          Computer Science B.S.E
        </p>
        <p className="text-lg mt-4">
          Courses: Programming and Intro Data Structures, Discrete Math,
          Microprocessors and Toys, Data Structures and Algorithms, Intro to
          Computer Organization
        </p>
        <p className="text-lg">
          Activities:{" "}
          <a
            href="https://v1michigan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal"
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
