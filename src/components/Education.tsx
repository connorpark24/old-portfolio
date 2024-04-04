const Education = () => {
  return (
    <section
      className="flex items-center min-h-screen px-8 md:px-16 py-24 bg-primary"
      id="education"
    >
      <div className="flex flex-col gap-y-3 items-center w-full">
        <h1 className="md:text-lg text-base text-white font-noto-sans font-light">
          education
        </h1>
        <p className="text-white lg:text-7xl md:text-6xl text-5xl font-karma font-semibold text-center">
          university of michigan, ann arbor
        </p>
        <p className="lg:text-lg text-base text-white font-noto-sans font-light text-center">
          College of Engineering, Computer Science B.S.E
        </p>
        <p className="lg:text-lg text-base text-white md:w-2/3 text-center font-noto-sans font-light">
          Courses: Programming and Intro Data Structures, Discrete Math,
          Microprocessors and Toys, Data Structures and Algorithms, Intro to
          Computer Organization
        </p>
        <p className="lg:text-lg text-base text-white font-noto-sans font-light">
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

export default Education;
