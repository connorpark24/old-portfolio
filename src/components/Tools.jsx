import { technologies } from "../constants/index";

const Tools = () => {
  return (
    <section
      className="w-full flex flex-col py-12 lg:py-24 mb-8 items-center text-primary font-light"
      id="toolkit"
    >
      <div className="flex flex-col gap-8 items-center">
        <h1 className="lg:text-7xl md:text-6xl text-5xl">Toolkit</h1>
        <div className="w-2/3 lg:w-1/2 grid grid-cols-4 sm:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4">
          {technologies.map((technology, index) => (
            <div key={index} className="relative group">
              <img
                src={technology.icon}
                className="rounded-2xl"
                alt={technology.name}
              />
              <p className="absolute w-full bottom-0 left-0 text-xs text-center text-white bg-primary bg-opacity-70 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
