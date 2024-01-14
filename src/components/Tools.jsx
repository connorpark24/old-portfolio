import { technologies } from "../constants/index";

const Tools = () => {
  return (
    <section
      className="w-full flex flex-col items-center text-primary font-light h-[600px]"
      id="toolkit"
    >
      <div className="mx-auto my-auto flex flex-col gap-12">
        <h1 className="lg:text-7xl md:text-5xl text-3xl text-center">
          Toolkit
        </h1>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((technology, index) => (
            <div key={index} className="relative group">
              <img
                src={technology.icon}
                className="w-24 h-24 rounded-3xl p-2"
                alt={technology.name}
              />
              <p className="absolute w-full bottom-0 left-0 text-sm text-center text-white bg-black bg-opacity-70 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1">
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
