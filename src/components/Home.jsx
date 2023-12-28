import { styles } from "../styles";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

const Home = () => {
  return (
    <section
      className="w-full flex flex-col gap-y-16 md:flex-row justify-between mt-32 items-center"
      id="home"
    >
      <div className="flex flex-col gap-y-4">
        <h1 className={styles.heroHeadText}>Hi, I'm Connor</h1>
        <p className={`${styles.heroSubText} text-primary`}>
          Student at the University of Michigan
        </p>
        <Link className="w-44 h-16 rounded-xl bg-primary flex flex-row items-center p-4 justify-around">
          <p className="text-white text-xl">Contact</p>
          <img src={avatar} className="w-8 h-8 rounded-3xl" />
        </Link>
      </div>

      <img
        src={avatar}
        className="xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px]"
      />

    </section>
  );
};

export default Home;
