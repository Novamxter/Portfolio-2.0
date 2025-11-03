import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  SunIcon as Sun,
  ArrowDownTrayIcon as Download,
  Bars3Icon as Ham,
} from "@heroicons/react/24/outline";
// OR
import { SunIcon as SunSolid } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <>
      <nav className="sticky bg-[#edf6ffc1] z-50 top-0 left-0 w-full h-[7vw] max-h-[66px] min-h-[50px] flex justify-between items-center py-3 px-6 lg:px-8">
        <div className="nav-left font-logo text-[22px] lg:text-[26px] mlg:min-w-[204px]">
          Mohit Kumar
        </div>
        <ul className="hidden min-h-[100%] bg-[#C9E5FB] px-8 items-center justify-around w-[70%] max-w-[640px] rounded-[20px] mlg:flex">
          <HashLink smooth to="/#hero">
            <li className="nav-item">Home</li>
          </HashLink>
          <HashLink smooth to="/#about">
            <li className="nav-item">About</li>
          </HashLink>
          <HashLink smooth to="/#skills">
            <li className="nav-item">Skills</li>
          </HashLink>
          <HashLink smooth to="/#work">
            <li className="nav-item">Work</li>
          </HashLink>
          <HashLink smooth to="/#contact">
            <li className="nav-item">Contact</li>
          </HashLink>
        </ul>
        <div className="nav-right flex items-center justify-end gap-2 lg:gap-3 mlg:min-w-[204px]">
          <Sun className="h-[28px] lg:h-[32px]" />
          <a
            className="hidden x-sm:flex items-center text-[14px] lg:text-[16px] bg-black text-white h-10 gap-2 px-3 rounded-[10px]"
            href="/Resume_10-09-2025.pdf"
            download
          >
            <Download className="h-[18px] lg:h-[22px]" />
            Download CV
          </a>
          <div className="mlg:hidden">
            <Ham className="h-[28px]" />
          </div>
        </div>
      </nav>
    </>
  );
}
