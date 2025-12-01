import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white text-center py-6 mt-10">
      <div className="container mx-auto text-center space-y-4">
        <h4 className="text-lg font-semibold">Follow Us</h4>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors hover:scale-110"
          >
            <FaYoutube />
          </a>
        </div>
        <p className="text-sm text-[#FFD166]">
          © {new Date().getFullYear()} TourEase | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
