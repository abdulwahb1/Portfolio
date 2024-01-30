import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-full justify-end items-center px-2 py-3 z-10">
      {/* burger menu icon */}
      <div
        className="md:hidden min-[375px]:block flex"
        onClick={() => toggleMenu()}
      >
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H30" stroke="#21243D" strokeWidth="1.6" />
          <path d="M0 10H30" stroke="#21243D" strokeWidth="1.6" />
          <path d="M0 19H30" stroke="#21243D" strokeWidth="1.6" />
        </svg>
      </div>

      {/* main container for our menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white shadow-md flex md:hidden flex-col justify-start items-start p-4">
          <div className="flex flex-col relative justify-start items-start w-full">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-[#21243D] font-medium text-[1.25rem] hover:text-[#FF6464]"
              >
                {link.text}
              </a>
            ))}
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 right-0 cursor-pointer"
              onClick={() => toggleMenu()}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect width="24" height="24" fill="white"></rect>{" "}
                <path
                  d="M7 17L16.8995 7.10051"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M7 7.00001L16.8995 16.8995"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
