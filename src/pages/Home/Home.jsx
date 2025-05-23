import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="container  w-full flex flex-col  bg-white overflow-hidden h-auto py-4">
      <Header />
      <main className="flex flex-col items-center justify-center w-full h-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
