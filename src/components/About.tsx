const About = () => {
  return (
    <section
      className="flex flex-col h-screen min-h-screen px-16 py-16 bg-white"
      id="about"
    >
      <div className="flex flex-col gap-y-3 w-1/2 h-1/2">
        <h1 className="md:text-lg text-base text-primary font-noto-sans font-light">
          about
        </h1>
        <p className="lg:text-xl text-lg text-primary font-noto-sans font-light ">
          coming soon...
        </p>
        {/* <p className="lg:text-xl text-lg text-primary font-noto-sans font-light text-right ">
          People I look up to are Tiger Woods, Blake Corum, and Paul Graham.
        </p>
        <p className="lg:text-xl text-lg text-primary font-noto-sans font-light text-right ">
          In my free time, I enjoy playing golf and trying new foods.
        </p> */}
      </div>
      <div className="flex flex-col gap-y-3 self-end justify-end items-end w-1/2 h-1/2">
        <h1 className="md:text-lg text-base text-primary font-noto-sans font-light text-right">
          education
        </h1>
        <p className="text-primary lg:text-7xl md:text-6xl text-5xl font-karma font-semibold text-right">
          university of michigan ann arbor
        </p>
        <p className="lg:text-lg text-base text-primary font-noto-sans font-light text-right">
          College of Engineering, Computer Science B.S.E
        </p>
        <p className="lg:text-lg text-base text-primary font-noto-sans font-light text-right">
          Courses: Programming and Intro Data Structures, Discrete Math,
          Microprocessors and Toys, Data Structures and Algorithms, Intro to
          Computer Organization
        </p>
        <p className="lg:text-lg text-base text-primary font-noto-sans font-light">
          Activities:{" "}
          <a
            href="https://v1michigan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            V1 Michigan
          </a>
          ,{" "}
          <a
            href="https://www.upround.vc/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            UpRound Ventures
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
