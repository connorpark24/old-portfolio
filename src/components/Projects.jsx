import Carrent from "../assets/carrent.png";

const Projects = () => {
  const projects = [
    {
      name: "GoBrew",
      tech: "React Native, Typescript, Supabase, Zustand",
      description: "Description for GoBrew project.",
    },
    {
      name: "Spotify Playlist Generator",
      tech: "React, Spotify Web API",
      description: "Description for Spotify API Project",
    },
  ];

  return (
    <section
      className="flex flex-col gap-y-12 scroll-mt-40 px-8 md:px-16 py-12 font-light text-primary items-center"
      id="projects"
    >
      <h1 className="lg:text-7xl md:text-5xl text-3xl mx-auto">Projects</h1>
      <div className="w-4/5 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {projects.map((project, index) => (
            <Slide key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Slide = ({ project }) => (
  <div className="h-[400px] shadow-2xl shadow-primary/20 rounded-xl flex flex-col font-light">
    <div className="h-3/5">
      <img className="p-4 h-full object-cover mx-auto my-auto" src={Carrent} />
    </div>
    <div className="h-2/5 p-4 flex flex-col">
      <p className="text-3xl">{project.name}</p>
      <p className="text-lg mt-1">{project.tech}</p>
      <p className="text-md">{project.description}</p>
    </div>
  </div>
);

export default Projects;
