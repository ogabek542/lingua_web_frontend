import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom"; 
import Home from "./pages/Home/Home";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      <Routes >
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App


// 