const About = () => {
  return (
    <section
      className="flex flex-col md:items-end md:justify-end items-center h-screen min-h-screen px-16 py-16 bg-white"
      id="education"
    >
      <div className="flex flex-col gap-y-3 items-end w-1/2">
        <h1 className="md:text-lg text-base text-primary font-noto-sans font-light">
          about
        </h1>
        <p className="lg:text-xl text-lg text-primary font-noto-sans font-light text-right ">
          coming soon...
        </p>
        {/* <p className="lg:text-xl text-lg text-primary font-noto-sans font-light text-right ">
          People I look up to are Tiger Woods, Blake Corum, and Paul Graham.
        </p>
        <p className="lg:text-xl text-lg text-primary font-noto-sans font-light text-right ">
          In my free time, I enjoy playing golf and trying new foods.
        </p> */}
      </div>
    </section>
  );
};

export default About;
