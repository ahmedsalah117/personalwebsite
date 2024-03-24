import React, { useEffect, useState } from "react";
import { Colors } from "../utils/colors.js";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles.js";
import { logo, menu, close } from "../assets/index.js";
const Navbar = () => {
  const [active, setActive] = useState("second");
  const [toggle, setToggle] = useState(false);

  // Closing the mobile nav menu if the user clicks on the any part of the page.
  useEffect(() => {
    document.addEventListener("click", () => {
      setToggle(false);
    });

    return document.removeEventListener("click", () => {
      setToggle(false);
    });
  }, []);

  function activeLinkHandler() {
    const allSecs = document.querySelectorAll(".section");

    const secTops = Array.from(allSecs).map((sec) => {
      return sec.getBoundingClientRect().top;
    });

    window.addEventListener("scroll", (e) => {
      secTops.forEach((secTop, index) => {
        if (window.scrollY > secTop) {
          const allLinks = document.querySelectorAll("ul li");
          allLinks.forEach((link) => {
            return link.classList.remove("active-link");
          });
          switch (index) {
            case 0:
              document
                .querySelector("#overviewOverview")
                .classList.add("active-link");
              document
                .querySelector("#overviewOverviewMob")
                .classList.add("active-link");
              break;
            case 1:
              document
                .querySelector("#experienceExperience")
                .classList.add("active-link");
              document
                .querySelector("#experienceExperienceMob")
                .classList.add("active-link");
              break;
            case 2:
              document
                .querySelector("#projectsProjects")
                .classList.add("active-link");
              document
                .querySelector("#projectsProjectsMob")
                .classList.add("active-link");
              break;
            case 3:
              document
                .querySelector("#contactContact")
                .classList.add("active-link");
              document
                .querySelector("#contactContactMob")
                .classList.add("active-link");
              break;
          }
        }
      });
    });
  }

  useEffect(() => {
    activeLinkHandler();
  }, []);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-[100] bg-primary`}
    >
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
        <Link
          to="/personalwebsite/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            hmed &nbsp; Bahnasy
          </p>
        </Link>
        <ul className="list-none md:flex flex-row hidden gap-10">
          {navLinks.map((link) => {
            return (
              <li
                id={`${link.id}${link.title}`}
                key={link.id + Math.random() * 100}
                className={`${
                  active === link.title ? "active-link" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer duration-300`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-1 md:hidden relative z-[100] justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setToggle((prev) => !prev);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 items-start justify-end">
              {navLinks.map((link) => {
                return (
                  <li
                    id={link.id + link.title + "Mob"}
                    key={link.id + Math.random() * 1000}
                    className={`${
                      active === link.title ? "active-link" : "text-secondary"
                    } hover:text-white text-[18px] font-poppins font-medium cursor-pointer duration-200`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
