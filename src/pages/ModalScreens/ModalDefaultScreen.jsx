import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { MdArrowBack, MdClose } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import LinguaPhoto from "../../assets/linguaPhoto.png";

const menuItems = [
  { name: "Services", path: "services" },
  { name: "Solutions", path: "solutions" },
  { name: "Resources", path: "resources" },
  { name: "Company", path: "company" },
];

const ModalDefaultScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split("/")[2]; // Fixed: should be index 2, not 1
  const currentMenu = menuItems.find((item) => item.path === currentPath);
  
  return (
    <div className="fixed inset-0 bg-white/50 backdrop-blur-md z-[9999] flex flex-col h-screen">
      <div className="flex p-4 justify-between items-center bg-white border-b border-gray-300">
        {currentMenu ? (
          // Back navigation header
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/modaldefault")}
              className="text-2xl text-[#083473] hover:text-gray-600 transition"
            >
              <MdArrowBack />
            </button>
            <span className="text-lg font-bold text-[#083473]">
              {currentMenu.name}
            </span>
          </div>
        ) : (
          // Logo and title (default view)
          <div className="flex items-center gap-2">
            <img className="w-9 h-9" src={LinguaPhoto} alt="Logo" />
            <span className="text-lg font-bold uppercase text-[#083473]">
              World Translate Service
            </span>
          </div>
        )}

        <button
          className="text-2xl text-[#083473] hover:text-red-600 transition"
          onClick={() => navigate("/")}
        >
          <MdClose />
        </button>
      </div>

      {/* Conditional rendering of menu or screen */}
      <div className="container flex-1 overflow-y-auto bg-white pt-4">
        {currentMenu ? (
          // Display routed screen
          <Outlet />
        ) : (
          // Default menu links
          <div className="flex flex-col gap-4 px-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={`/modaldefault/${item.path}`}
                className="flex justify-between items-center text-xl font-medium text-gray-600 py-2 border-b hover:bg-gray-100 rounded transition"
              >
                {item.name}
                <GoArrowRight className="text-2xl" />
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 bg-white shadow-sm">
        <button className="bg-[#083473] hover:bg-[#062b5e] text-white rounded-full px-6 py-2 w-full font-semibold text-lg transition">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ModalDefaultScreen;