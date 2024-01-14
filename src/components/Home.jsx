const Home = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center min-h-screen w-screen px-8 md:px-16 font-light"
      id="home"
    >
      <div className="flex flex-col gap-6 mx-auto items-center">
        <h1 className="text-primary lg:text-8xl md:text-6xl text-4xl">
          Connor Park
        </h1>
        <p className="text-primary lg:text-2xl text-xl">
          Freshman at the University of Michigan
        </p>
      </div>
    </section>
  );
};

export default Home;
