import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-white border border-[#3bc7f6] p-2 rounded-full w-[254px] fixed top-5 left-1/2 -translate-x-1/2 shadow z-[9999]">
        <ul className="flex items-center justify-center gap-3  text-blue-400 font-medium">
          <li>
            <Link to="/" className="hover:underline hover:cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/weather"}
              className="hover:underline hover:cursor-pointer"
            >
            weather
            </Link>
          </li>
          <li>
            <Link
              to={"/privacy"}
              className="hover:underline hover:cursor-pointer"
            >
              Privacy
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
