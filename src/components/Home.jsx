import { styles } from "../styles";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

const Home = () => {
  return (
    <section
      className="relative w-full mx-auto flex flex-row h-[80vh]"
      id="home"
    >
      <div className="w-1/2 mt-[35vh] ml-48">
        <h1 className={styles.heroHeadText}>Hi, I'm Connor</h1>
        <p className={`${styles.heroSubText} mt-2 mb-6 text-primary`}>
          I like to build things
        </p>
        <Link className="w-44 h-16 rounded-xl bg-primary flex flex-row items-center p-4 justify-around">
          <p className="text-white text-xl">Contact</p>
          <img src={avatar} className="w-8 h-8 rounded-3xl" />
        </Link>
      </div>
      <img src={avatar} className="w-[600px] h-[600px] mt-32" />
    </section>
  );
};

export default Home;
