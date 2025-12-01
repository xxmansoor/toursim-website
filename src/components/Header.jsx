import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#0D1B2A] text-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#FFD166]">AI Tourism</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-[#FF6B35] transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#FF6B35] transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-[#FF6B35] transition">
          Contact
        </Link>
        <Link to="/destinations" className="hover:text-[#FF6B35] transition">
          Destinations
        </Link>
        <Link to="/hotels" className="hover:text-[#FF6B35] transition">
          Hotels
        </Link>
      </nav>
    </header>
  );
};

export default Header;
