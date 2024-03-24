import { BallCanvas } from "./canvas";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";
const Tech = () => {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-12 pb-10">
      {technologies.map((item, index) => {
        {
          /* <div className="w-28 h-28" key={item.name}>
          <BallCanvas icon={item.icon} />
          <p className="text-center">{item.name}</p>
        </div> */
        }

        return (
          <motion.div
            key={item.name}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <Tilt
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary p-5 rounded-2xl  min-w-[160px] md:w-full flex justify-center items-center"
            >
              <div className="w-fit flex flex-col justify-center items-center gap-4">
                <img
                  src={item.icon}
                  key={index}
                  className="object-contain w-[70px] h-[70px]"
                />
                <p className="text-center">{item.name}</p>
              </div>
            </Tilt>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
