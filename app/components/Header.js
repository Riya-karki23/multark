"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const navLinks = [
    { nav: "HOME", href: "/" },
    { nav: "SOLUTIONS", href: "/solutions" },
    { nav: "SERVICES", href: "/services" },
    { nav: "PRICING", href: "/pricing" },
    { nav: "ABOUT", href: "/about" },
  ];

  const [menu, setMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
  <header
  className={`${
    showNavbar ? "top-0" : "-top-20"
  } bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80 backdrop-blur-lg fixed z-[100] w-full transition-all duration-500 shadow-md`}
>


      <div className="flex justify-between items-center px-3 py-4 md:px-12">
        <div>
          <Link href="/">
            <img
              src="https://erp.multark.com/files/multark-website-logo.png"
              alt="logo-img"
              className="h-9 md:h-12"
            />
          </Link>
        </div>

        <div onClick={() => setMenu(true)} className="md:hidden">
          <img src="/icons/menu.svg" alt="Menu Icon" width="32" height="32" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex gap-10">
            {navLinks.map(({ nav, href }) => (
              <li
                key={nav}
                className="relative text-gray-100 text-[15px] py-2 before:absolute after:absolute before:bottom-0 after:top-0 before:left-0 after:right-0 before:w-0 after:w-0 before:h-[2px] after:h-[2px] before:bg-red-500 after:bg-red-500 before:transition-all after:transition-all hover:before:w-full hover:after:w-full hover:text-red-400"
              >
                <Link href={href}>{nav}</Link>
              </li>
              
            ))}
          </ul>
        </div>
        <Link href="/contact" className="md:inline-flex hidden relative  items-center px-10 py-2 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-gray-50">
    <span className="absolute left-0 p-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span className="absolute right-0 flex items-center  justify-start w-8 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="relative">Connect Now</span>
</Link>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 z-[100] h-screen w-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black px-5 transition-transform duration-600 ease-in-out ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="flex justify-end py-8 opacity-80"
          onClick={() => setMenu(false)}
        >
          <img src="/icons/cross.svg" alt="close-icon" className="h-10" />
        </div>

        <ul className="text-center flex flex-col gap-3 text-xl text-white">
          {navLinks.map(({ nav, href }) => (
            <li
              key={nav}
              onClick={() => setMenu(false)}
              className="border-gray-600 border-b py-6 hover:bg-white/10 transition"
            >
              <Link href={href}>{nav}</Link>
            </li>
          ))}
        </ul>
      </div>
      
    </header>
  );
}
