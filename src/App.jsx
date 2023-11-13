import { BrowserRouter } from "react-router-dom";
import { styles } from "./styles.js";
import UMlogo from "./assets/UMlogo.png";
import carrent from "./assets/carrent.png";
import jobit from "./assets/jobit.png";
import tripguide from "./assets/tripguide.png";
import docker from "./assets/tech/docker.png";

const App = () => {
  return (
    <BrowserRouter>
      {/* <div className="relative z=0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div> */}
      <div className="bg-white min-h-screen">
        <nav className="w-1/2 flex flex-row rounded-3xl sticky top-0 left-1/4 justify-around p-2 bg-primary bg-opacity-90">
          <div className="text-opacity-100">Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Tools</div>
          <div>Contact</div>
        </nav>

        <section className="flex flex-row h-[80vh]">
          <div className="w-1/2 my-auto ml-32">
            <h1 className={styles.heroHeadText}>Hi, I'm Connor!</h1>
            <p className={`${styles.heroSubText} mt-2 text-primary`}>
              I like to build things
            </p>
          </div>
          <div className="text-7xl bg-primary w-96 h-96 mx-auto my-auto" />
        </section>

        <section className="flex flex-row h-[80vh]">
          <img src={UMlogo} className="w-[450px] h-[500px] mx-32 my-auto" />
          <div className="my-auto mx-30">
            <h1 className={styles.heroHeadText}>Education</h1>
            <p className={`${styles.heroSubText} mt-2 text-primary`}>
              University of Michigan, Computer Science
            </p>
            <p className="text-primary">
              Courses Taken: EECS 280, EECS 203, CHEM 125/126/130, ECON 101,
              EECS 281, EECS 370
            </p>
          </div>
        </section>

        <section className="flex flex-col ml-32">
          <h1 className={`${styles.heroHeadText} mt-4`}>Projects</h1>
          <div className="flex flex-row h-[50vh]">
            <div className="w-1/3 my-auto">
              <p className={`${styles.heroSubText} text-primary`}>Carrent</p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img
              src={carrent}
              className="text-7xl border-primary border-4 w-[500px] h-[350px] rounded-3xl mx-auto my-auto"
            />
          </div>

          <div className="flex flex-row h-[50vh]">
            <div className="w-1/3 my-auto">
              <p className={`${styles.heroSubText} text-primary`}>Jobit</p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img
              src={jobit}
              className="text-7xl border-primary border-4 w-[500px] h-[350px] rounded-3xl mx-auto my-auto"
            />
          </div>

          <div className="flex flex-row h-[50vh]">
            <div className="w-1/3 my-auto">
              <p className={`${styles.heroSubText} text-primary`}>Tripguide</p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img
              src={tripguide}
              className="text-7xl border-primary border-4 w-[500px] h-[350px] rounded-3xl mx-auto my-auto"
            />
          </div>
        </section>

        <section className="flex flex-col h-[80vh]">
          <h1 className={`${styles.heroHeadText} mx-auto my-12`}>My Toolkit</h1>
          <div className="grid grid-cols-6 h-[40vh] w-3/5 mx-auto gap-4">
            <img
              src={docker}
              className="border-primary border-2 w-28 h-28 rounded-3xl p-2"
            />
          </div>
        </section>

        <div className="flex flex-row h-[80vh] justify-around">
          <p className="mx-auto text-7xl">Contact</p>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
