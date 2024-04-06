interface Project {
  name: string;
  tech: string;
  description: string;
}

const Work = () => {
  const projects: Project[] = [
    {
      name: "upround ventures platform",
      tech: "Next.js, TypeScript, Tailwind CSS, Supabase, Google OAuth",
      description:
        "Project management platform for UpRound Ventures. Includes features such as user management, task allocation, progress tracking, startup relationship management, and more.",
    },
    {
      name: "gobrew",
      tech: "React Native, Expo, Supabase, Zustand",
      description:
        "Social networking app for students seeking career-related advice. V1 Fall '23 Cohort Project.",
    },
    {
      name: "v1 platform",
      tech: "Next.js, TypeScript, Taiwlind CSS, Supabase",
      description:
        "Building Projects page for builders at Michigan to share their work.",
    },
    {
      name: "winston",
      tech: "React, TypeScript, Tailwind CSS, Flask, OpenAI API",
      description:
        "Tool that uses AI to turn PDFs into multiple choice, open-ended, or true/false practice questions.",
    },
  ];

  return (
    <section
      className="flex items-center min-h-screen px-8 md:px-16 lg:px-24 bg-primary py-24"
      id="work"
    >
      <div className="flex flex-col items-center w-full">
        <h1 className="md:text-lg text-base text-white mb-4 font-noto-sans">
          work
        </h1>
        <div className="flex flex-col gap-y-10 lg:w-3/5 w-full">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col items-center gap-y-2"
            >
              <p className="text-white lg:text-6xl text-5xl font-karma text-center leading-10">
                {project.name}
              </p>
              <p className="text-white lg:text-lg text-base font-noto-sans  font-light text-center">
                {project.tech}
              </p>
              <p className="text-white lg:text-lg text-base  leading-5 font-noto-sans font-light  text-center">
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
