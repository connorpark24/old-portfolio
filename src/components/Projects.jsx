import Carrent from "../assets/carrent.png";

const Projects = () => {
  const slides = ["GoBrew", "Golf Ball CV Detection"];

  return (
    <section
      className="flex flex-col gap-y-12 scroll-mt-40 px-8 md:px-16 font-light text-primary items-center"
      id="projects"
    >
      <h1 className="lg:text-7xl md:text-5xl text-3xl mx-auto">Projects</h1>
      <div className="w-4/5 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {slides.map((index) => (
            <Slide key={index} content={slides[index]} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Slide = ({ content }) => (
  <div className="h-[400px] shadow-lg rounded-xl flex flex-col font-light">
    <div className="h-3/5 mx-auto my-auto">
      <img className="p-4 w-[300px] h-[200px]" src={Carrent} />
    </div>
    <div className="h-2/5 p-4">
      <p className="text-3xl">{content}</p>
      <p className="text-md">
        React, Typescript, Node, Express, MongoDB, Redux, Spotify Web API
      </p>
    </div>
  </div>
);

export default Projects;
