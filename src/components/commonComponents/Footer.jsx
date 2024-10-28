import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/35.jpg";
import cfxPdf from "../../assets/5c.jpg";
import footerbg from "../../assets/signup.jpg"
import Logo from "./Logo";

const FooterComponent = () => {
  return (
    <footer
      className="text-white py-10 px-6 h-auto lg:h-[430px] bg-[#008769] flex flex-col justify-end"
    
    >
      {/* Main Footer Content */}
      <div className="container mx-auto flex flex-wrap justify-between lg:gap-8">
        {/* Logo and Description */}
        <div className="space-y-4 w-full lg:w-[300px] lg:text-left">
          <Logo color="white"/>
          <p className="text-[16px] lg:text-[18px]">
          Explore unforgettable destinations and curated travel experiences tailored just for you. From adventure to relaxation, let us turn your dream journey into reality.
          </p> 
        </div>

        {/* Menu Links */}
        <div className="space-y-3 lg:w-[125px] text-center lg:text-left">
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            <li className="lg:text-base text-[12px]"><a href="/" className="hover:text-gray-400">Home</a></li>
            <li className="lg:text-base text-[12px]"><a href="/aboutUs" className="hover:text-gray-400">Help Center</a></li>
            <li className="lg:text-base text-[12px]"><a href="/services" className="hover:text-gray-400">About viator</a></li>
            <li className="lg:text-base text-[12px]"><a href="/privacy-policy" className="hover:text-gray-400">Careers</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="space-y-2 lg:w-[125px] text-center lg:text-left">
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li className="lg:text-base text-[12px]"><a href="/privacy-policy" className="hover:text-gray-400">Privacy & Cookies Policy</a></li>
            <li className="lg:text-base text-[12px]"><a href="/cookies-policy" className="hover:text-gray-400">Sitemap</a></li>
            <li className="lg:text-base text-[12px]"><a href="/term-of-use" className="hover:text-gray-400"></a>Supplier signup</li>
            <li className="lg:text-base text-[12px]"><a href="/dmca-policy" className="hover:text-gray-400">DMCA Policy</a></li>
          </ul>
        </div>

        {/* Other Pages Links */}
        <div className="space-y-2 lg:w-[125px] text-center lg:text-left">
          <h3 className="font-semibold mb-3">Other Pages</h3>
          <ul className="space-y-2">
            <li className="lg:text-base text-[12px]"><a href="#" className="hover:text-gray-400">FAQ</a></li>
            <li className="lg:text-base text-[12px]"><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Travel Agent</a></li>
            <li className="lg:text-base text-[12px]"><a  target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Viator Blogs</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-6 text-center lg:text-left text-sm text-gray-400">
        <div className="flex justify-center lg:justify-start space-x-4">
          <a href="https://www.linkedin.com/company/cfxpay/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full transition-all duration-300 hover:bg-white/10">
            <FaLinkedin className="text-white text-2xl" />
          </a>
          <a href="https://www.facebook.com/cfxpay" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full transition-all duration-300 hover:bg-white/10">
            <FaFacebook className="text-white text-2xl" />
          </a>
          <a href="https://www.instagram.com/cfxpaygateway/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full transition-all duration-300 hover:bg-white/10">
            <FaInstagram className="text-white text-2xl" />
          </a>
          <a href="https://www.youtube.com/@CFXPAY" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full transition-all duration-300 hover:bg-white/10">
            <FaYoutube className="text-white text-2xl" />
          </a>
        </div>

        <h1 className="mt-4 lg:mt-0 text-white">
          Copyright © 2024 VIATOR. All Rights Reserved
        </h1>
      </div>
    </footer>
  );
};

export default FooterComponent;
