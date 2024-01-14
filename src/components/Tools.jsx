import { technologies } from "../constants/index";

const Tools = () => {
  return (
    <section
      className="w-full flex flex-col py-12 lg:py-24 mb-8 items-center text-primary font-light"
      id="toolkit"
    >
      <div className="flex flex-col gap-8">
        <h1 className="lg:text-7xl md:text-6xl text-5xl text-center">
          Toolkit
        </h1>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-x-8 lg:gap-y-4 gap-y-2">
          {technologies.map((technology, index) => (
            <div key={index} className="relative group">
              <img
                src={technology.icon}
                className="lg:w-24 lg:h-24 h-20 w-20 rounded-2xl p-2"
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
