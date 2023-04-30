import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import logo from "../assets/lws.svg";

const Navbar = () => {
  return (
    <div>
      {/* navigation */}
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link to="/">
            <img className="h-10" src={logo} alt={logo} />
          </Link>
          {/* search */}

          <Search />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
