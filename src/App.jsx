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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modaldefault/" element={<ModalDefaultScreen />}>
        <Route path="services" element={<Menu0 />} />
        <Route path="solutions" element={<Menu1 />} />
        <Route path="resources" element={<Menu2 />} />
        <Route path="company" element={<Menu3 />} />
      </Route>
    </Routes>
  </div>
  )
}

export default App
