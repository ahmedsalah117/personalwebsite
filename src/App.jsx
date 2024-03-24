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
      <div className="relative z-0 bg-primary">
        <div className=" bg-center bg-no-repeat bg-cover relative">
          <Navbar />
          <Hero />
          <StarsCanvas />
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
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
