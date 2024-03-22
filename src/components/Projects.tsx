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
      className="flex flex-col gap-y-12 lg:scroll-mt-40 px-8 md:px-16 lg:px-24 py-12 lg:py-24 font-light items-center bg-primary"
      id="projects"
    >
      <h1 className="lg:text-7xl md:text-6xl text-5xl mx-auto text-white">
        Projects
      </h1>
      <div className="w-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      <img className="p-4 h-full object-cover mx-auto my-auto" />
    </div>
    <div className="h-2/5 p-4 flex flex-col  text-white">
      <p className="lg:text-3xl text-2xl">{project.name}</p>
      <p className="text-lg">{project.tech}</p>
      <p className="text-md mt-2">{project.description}</p>
    </div>
  </div>
);

export default Projects;
