import { styles } from "../styles";
import avatar from "../assets/avatar.png";

const Home = () => {
  return (
    <section
      className="flex flex-col gap-y-16 md:flex-row justify-between mt-32 items-center"
      id="home"
    >
      <div className="flex flex-col gap-y-4">
        <h1 className={styles.heroHeadText}>Hi, I'm Connor</h1>
        <p className={styles.heroSubText}>
          Student at the University of Michigan
        </p>
        <a
          href="#contact"
          className="w-44 h-14 rounded-xl bg-primary flex flex-row items-center p-4 justify-around"
        >
          <p className="text-white text-xl">Contact</p>
          <p className="text-3xl text-white">{">"}</p>
        </a>
      </div>

      <img
        src={avatar}
        className="xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]"
      />
    </section>
  );
};

export default Home;
