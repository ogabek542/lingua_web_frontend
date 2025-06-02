import React, { useRef, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainSection from "../MainSection/MainSection";
import MainTop from "../../components/MainTopSection/MainTop";

const Home = () => {
  const [hovering, setHovering] = useState(null);

  useEffect(() => {
    if (hovering !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [hovering]);

  return (
    <div className="  w-screen flex flex-col  bg-white overflow-hidden h-auto py-4 pb-0">
      <Header hovering={hovering} setHovering={setHovering} />

      {/* <main className="flex flex-col items-center justify-center w-full h-auto min-h-screen "> */}
      <main
        className={`flex flex-col items-center justify-center w-full h-auto min-h-screen transition-all duration-300
          ${
            hovering !== null
              ? "backdrop-blur-lg bg-white/50 blur-xs"
              : "bg-transparent"
          }
        `}
      >
        <Outlet />
        <MainSection />
      </main>
      <footer
        className={`  transition-all duration-300
            ${
              hovering !== null
                ? "backdrop-blur-lg bg-white/50 blur-xs"
                : "bg-transparent"
            }
          `}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
