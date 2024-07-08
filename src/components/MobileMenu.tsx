"use client";

import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>

      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center">
          <a href="/" className="block py-2">
            Home
          </a>
          <a href="/friends" className="block py-2">
            Friends
          </a>
          <a href="/groups" className="block py-2">
            Groups
          </a>
          <a href="/stories" className="block py-2">
            Stories
          </a>
          <a href="/login" className="block py-2">
            Login
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
