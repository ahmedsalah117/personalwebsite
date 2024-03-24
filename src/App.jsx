import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Works,
  Navbar,
  Hero,
  Tech,
  Contact,
  StarsCanvas,
} from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className=" bg-center bg-no-repeat bg-cover relative">
          <Navbar />
          <Hero />
          <StarsCanvas count={4000} shape={"sphere"} />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Toaster
          toastOptions={{
            position: "bottom-right",
            duration: 5000,
            style: { width: "fit-content", fontWeight: "bold" },
          }}
        />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas count={1000} shape={"box"} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
