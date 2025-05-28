import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom"; 
import Home from "./pages/Home/Home";
import { Menu0 } from "./components/HeaderComponent/Menu0";
import { Menu1 } from "./components/HeaderComponent/Menu1";
import { Menu2 } from "./components/HeaderComponent/Menu2";
import { Menu3 } from "./components/HeaderComponent/Menu3";
import ModalDefaultScreen from "./pages/ModalScreens/ModalDefaultScreen";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/modaldefault"  element={<ModalDefaultScreen/>}>
          <Route path="services" element={< Menu0/>} />
          <Route path="solutions" element={< Menu1/>} />
          <Route path="resources" element={< Menu2/>} />
          <Route path="company" element={< Menu3/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App



{/* <div className="fixed inset-0 z-[9999] bg-white/50 backdrop-blur-xs flex lg:hidden flex-col h-screen p-4  ">
                <div className="flex justify-between items-center p-4 bg-white  border-b-[1px] border-gray-300  ">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-9 h-9 object-cover"
                      src={LinguaPhoto}
                      alt="Logo"
                    />
                    <a href="#">
                      <p className="text-sm md:text-lg font-bold uppercase text-[#083473]">
                        World Translate Service
                      </p>
                    </a>
                  </div>
                  <button
                    className="text-2xl text-[#083473] hover:text-red-600 transition"
                    onClick={() => setShowMobileMenu(false)}
                    aria-label="Close menu"
                  >
                    <MdClose />
                  </button>
                </div>

                <div className="container flex-1 flex flex-col items-start w-full gap-4 bg-white pt-4">
                  {["Services", "Solutions", "Resources", "Company"].map((item) => (
                    <div
                      key={item}
                      className="flex items-baseline justify-between w-full cursor-pointer"
                    >
                      <a
                        href="#"
                        className="text-xl  font-medium  py-2 text-center text-gray-600   "
                      >
                        {item}
                      </a>

                      <GoArrowRight className="text-2xl text-gray-600" />
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-white shadow-sm">
                  <button className="bg-[#083473] hover:bg-[#062b5e] text-white rounded-full px-6 py-2 w-full font-semibold text-lg transition">
                    Order Now
                  </button>
                </div>
              </div> */}