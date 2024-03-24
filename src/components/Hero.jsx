import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers.jsx";
import { ReactTyped } from "react-typed";
import { Typing, TypingStep } from "typing-effect-reactjs";
const Hero = () => {
  const sequence = [
    {
      content: "#include<iostream>\n\n",
    },
    {
      content: "using namespace std;\n",
    },
    {
      content: "int main() {\n",
    },
    {
      content: 'cout << "Hello World";\n',
    },
    {
      content: "return 0;\n",
    },
    {
      content: "}",
    },
  ];
  const editorStyle = {
    margin: "auto",
    width: "50%",
    height: "300px",
    // border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 12px 4px rgba(0,0,0,0.1)",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#fff",
    // backgroundColor: "#23272E",
  };
  return (
    <section className="w-full relative h-screen mx-auto">
      {/* Headers container */}
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
          <p className={`${styles.heroSubText} mt-2  text-white-100`}>
            Software Developer | Mastering NextJS, React and React Native for
            Next-Level Applications
          </p>

          <div
          // className="translate-y-[150px]"
          >
            {/* <ReactTyped
              backSpeed={40}
              typeSpeed={40}
              backDelay={2000}
              loop
              className={`${styles.heroSubText} mt-2  text-white-100`}
              strings={[
                " Software Developer | Mastering NextJS, React and React Native for Next-Level Applications",
              ]}
            /> */}
          </div>
          <div className="translate-y-[100px] text-center">
            <ReactTyped
              backSpeed={40}
              typeSpeed={40}
              backDelay={2000}
              loop
              className={`${styles.heroSubText} mt-2  text-white-100`}
              // strings={[" Crafting Digital Experience. Designing Tomorrow 💪"]}
              // strings={["console.log('Welcome to my website!')"]}
              // strings={[
              //   "const createApp = () => { return <App />; }",
              //   "let's debug with console.log('Hello, bugs!');",
              //   "document.getElementById('root').innerHTML = 'Welcome!';",
              //   "React.useState('Innovate. Create. Iterate.')",
              // ]}
              strings={[
                "fetch('/api/ideas').then(response => response.json());",
                "Promise.resolve('Delivering quality code').catch(e => console.error(e));",
                "localStorage.setItem('creativity', 'unlimited');",
                "document.querySelector('.future').classList.add('bright');",
              ]}
            />
          </div>
          <div style={editorStyle}>
            {/* <TypingStep
              Infinity
              loop
              sequence={sequence}
              element="p"
              typeSpeed={95}
              styleClass="code"
            /> */}
          </div>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Developer | Mastering NextJS, React and React Native for
            Next-Level Applications
          </p> */}
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className="z-50 w-fit left-[50%] translate-x-[-50%] absolute xs:bottom-0 bottom-32 flex justify-center items-center">
        <a href="#overview" className="block w-fit h-full">
          <div className=" w-[35px] h-[64px] rounded-3xl  border-4 border-secondary flex justify-center items-start ">
            <motion.div
              onClick={() => {
                console.log("clicked");
              }}
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
