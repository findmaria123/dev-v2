"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/fake-db/navLinks";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto px-5 lg:px-1 lg:pt-5 xl:px-0 h-[80px] lg:h-[130px] flex items-center justify-between font-inter">
          <div className="flex items-center justify-between md:gap-1 lg:gap-2 xl:gap-3 2xl:gap-7">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/images/Logo.png"}
                  alt="logo image"
                  className="w-[169px] h-[30px] xl:w-[253px] xl:h-[44px]"
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <div className="pt-3 hidden lg:flex">
              <nav className="list-none flex items-center text-dark-grey md:text-[15px] xl:text-[17px] 2xl:text-[20px] font-medium md:gap-1 lg:gap-2 xl:gap-3 2xl:gap-7">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`nav-item hover:text-primary ${
                      pathname === link.href ? "text-primary" : ""
                    }`}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </nav>
            </div>
          </div>
          <div className="">
            <div className="hidden lg:flex items-center justify-between md:gap-1 lg:gap-2 xl:gap-3 2xl:gap-3 text-center">
              <button className="text-primary py-[6px] px-[15px] xl:px-[24px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-bold">
                Login
              </button>
              <button className="header-button">Fixed my Car</button>
              <button className="header-button">Service My Car</button>
            </div>
            <div
              className="lg:hidden flex items-center justify-end"
              onClick={toggleSidebar}
            >
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                aria-hidden="true"
              >
                <path
                  d="M0.75 0H23.25V2.5H0.75V0ZM8.25 8.75H23.25V11.25H8.25V8.75ZM0.75 17.5H23.25V20H0.75V17.5Z"
                  fill="#1A3762"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

{/* mobile navbar */}

      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
          <div className="lg:hidden sidebar bg-gray-200 font-inter h-full py-5 w-64 fixed top-0 left-0 z-50">
            <div className="absolute -right-10 top-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={toggleSidebar}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.70711 6.70711C6.31658 7.09763 6.31658 7.73077 6.70711 8.12132L10.5858 12L6.70711 15.8787C6.31658 16.2692 6.31658 16.9024 6.70711 17.2929C7.09763 17.6834 7.73077 17.6834 8.12132 17.2929L12 13.4142L15.8787 17.2929C16.2692 17.6834 16.9024 17.6834 17.2929 17.2929C17.6834 16.9024 17.6834 16.2692 17.2929 15.8787L13.4142 12L17.2929 8.12132C17.6834 7.73077 17.6834 7.09763 17.2929 6.70711C16.9024 6.31658 16.2692 6.31658 15.8787 6.70711L12 10.5858L8.12132 6.70711C7.73077 6.31658 7.09763 6.31658 6.70711 6.70711Z"
                  fill="#1A3762"
                />
              </svg>
            </div>
            <div className="px-4">
              <Link href={"/"}>
                <Image
                  src={"/images/Logo.png"}
                  alt="logo image"
                  className="w-[169px] h-[30px]"
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <nav className="p-4">
              <ul className="list-none">
                {navLinks.map((link, index) => (
                  <li key={index} className={`nav-item mb-4 hover:text-primary ${
                    pathname === link.href ? "text-primary" : ""
                  }`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center py-4">
                <button className="text-primary py-[6px] pr-5 text-[14px] font-bold">
                  Login
                </button>
                <button className="header-small-button">Fixed my Car</button>
              </div>
              <div>
                <button className="header-small-button">Service My Car</button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
