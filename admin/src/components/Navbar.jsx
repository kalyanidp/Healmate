import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("aToken");
    setAToken("");
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 py-4 bg-white border-b shadow-sm">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">

        {/* LOGO */}
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold">
          H
        </div>

        {/* TEXT */}
        <div className="flex flex-col leading-tight">

          {/* TOP ROW: HEALMATE + ADMIN */}
          <div className="flex items-center gap-2">

            <h1 className="text-xl font-semibold text-gray-800">
              HEALMATE
            </h1>

            {aToken && (
              <span className="text-xs px-2 py-0.5 border border-primary text-primary rounded-full">
                Admin
              </span>
            )}

          </div>

          {/* BOTTOM TEXT */}
          <p className="text-xs text-gray-500">
            Dashboard Panel
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center">

        {aToken && (
          <button
            onClick={logout}
            className="px-4 py-1.5 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
};

export default Navbar;