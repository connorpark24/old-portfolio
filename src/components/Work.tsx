interface Project {
  name: string;
  tech: string;
  description: string;
}

const Work = () => {
  const projects: Project[] = [
    {
      name: "UpRound Ventures Platform",
      tech: "Next.js, TypeScript, Taiwlind, Supabase, Google OAuth",
      description:
        "Project management platform for UpRound Ventures. Includes features such as user management, task allocation, progress tracking, startup relationship management, and more",
    },
    {
      name: "GoBrew",
      tech: "React Native, Tailwind, Supabase, Zustand",
      description:
        "Social networking app for students seeking career-related advice. V1 Fall '23 Cohort Project",
    },
    {
      name: "V1 Platform",
      tech: "Next.js, TypeScript, Taiwlind, Supabase",
      description:
        "Building Projects page for builders at Michigan to share their work.",
    },
    {
      name: "Winston",
      tech: "React, TypeScript, Tailwind, Flask, OpenAI API",
      description:
        "Tool that uses AI to turn PDFs into multiple choice, open-ended, or true/false practice questions.",
    },
  ];

  return (
    <section
      className="lg:scroll-mt-40 px-8 md:px-16 lg:px-24 py-12 lg:py-24 items-center bg-primary"
      id="projects"
    >
      <div className="my-auto flex flex-col">
        <h1 className="lg:text-xl text-lg text-white mb-4 font-light font-noto-sans">
          Work
        </h1>
        <div className="flex flex-col gap-y-10 w-2/3">
          {projects.map((project) => (
            <div id={project.name}>
              <p className="text-white lg:text-5xl md:text-3xl text-2xl font-karma mb-1">
                {project.name}
              </p>
              <p className="text-white text-lg mb-1.5 font-noto-sans font-light">
                {project.tech}
              </p>
              <p className="text-white leading-5 font-noto-sans font-light">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const Slide = ({ project }: { project: Project }) => (
//   <div className="h-[400px] rounded-xl flex flex-col font-light">
//     <div className="h-3/5">
//       <img className="p-4 h-full object-cover mx-auto my-auto" />
//     </div>
//     <div className="h-2/5 p-4 flex flex-col  text-white">
//       <p className="lg:text-3xl text-2xl">{project.name}</p>
//       <p className="text-lg">{project.tech}</p>
//       <p className="text-md mt-2">{project.description}</p>
//     </div>
//   </div>
// );

export default Work;
