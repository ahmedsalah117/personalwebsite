import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers.jsx";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
const Hero = () => {
  const [windowHeight, setWindowHeight] = useState(null);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });

    return window.removeEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });
  }, []);
  return (
    <section className="w-full relative min-h-screen mx-auto overflow-y-auto">
      {/* Headers container */}
      <div
        className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/*hero section header  */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Ahmed Bahnasy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2  text-white-100`}>
            Software Developer | Mastering NextJS, React and React Native for
            Next-Level Applications
          </p>
        </div>

        <div
          className={`w-full text-center absolute mt-8 top-[50%] left-0 ${
            windowHeight && windowHeight < 600 && "hidden"
          }`}
        >
          <ReactTyped
            backSpeed={40}
            typeSpeed={40}
            backDelay={3000}
            loop
            className={`${styles.heroSubText} mt-2  text-white-100 text-break`}
            strings={[
              "fetch('/api/ideas').then(response => response.json());",
              "Promise.resolve('Delivering quality code').catch(e => console.error(e));",
              "localStorage.setItem('creativity', 'unlimited');",
              "document.querySelector('.future' ).classList.add('bright');",
            ]}
          />
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div
        className={`z-50 w-fit left-[50%] translate-x-[-50%] absolute bottom-0  flex justify-center items-center ${
          windowHeight && windowHeight < 600 && "hidden"
        }`}
      >
        <a href="#overview" className="block w-fit h-full">
          <div className=" w-[35px] h-[64px] rounded-3xl  border-4 border-secondary flex justify-center items-start ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-secondary rounded-full mb-3"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
