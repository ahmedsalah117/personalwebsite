import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import SectionWrapper from "./../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";

import { github } from "../assets/index.js";

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  preview_link,
}) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div>
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="w-full h-[230px] relative">
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-2xl object-cover"
            />

            <div className="w-full flex absolute inset-0 p-3 justify-between gap-3 items-end  card-img_hover flex-col ">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full justify-center items-center flex cursor-pointer hover:scale-125 duration-200"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(preview_link, "_blank")}
                className=" bg-tertiary w-10 h-10 rounded-full justify-center items-center flex cursor-pointer  hover:scale-125 duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                  fill="#fff"
                >
                  <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">
              {description.map((item) => (
                <p className="mt-2" key={item}>
                  {item}
                </p>
              ))}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>my work</p>
        <h2 className={styles.sectionHeadText}>projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center xl:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
