import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers.jsx";

const Hero = () => {
  return (
    <section className="w-full relative h-screen mx-auto">
      <div
        className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Ahmed Bahnasy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Developer | Mastering NextJS, React and React Native for
            Next-Level Applications
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-0 bottom-32  w-full flex justify-center items-center">
        <a href="#overview">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full mb-3 bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
