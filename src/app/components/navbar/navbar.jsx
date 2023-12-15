"use client";
import React, { useState } from 'react'

function Navbar() {

    const [isClick, setisClick]= useState(false);
    const toggleNavbar = () => {
        setisClick(!isClick);
    };
  return (
    <div>
      <nav className="bg-custom-purple">
        <div className="mx-w-{1440px} mx-auto px-4 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                {/* Company Logo */}
                <a href="/">
                  <img
                    src="/WhiteLogo.png"
                    alt="Logo"
                    className="h-{25px} w-{238.89px} max-[375px]:pl-3"
                  />
                </a>
              </div>
            </div>
            {/* Navbar Items */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 w-{341px}">
                <a
                  href="/"
                  className="text-white text-sm font-medium hover:bg-white hover:text-black rounded-lg p-2 text-transform: uppercase"
                >
                  Services
                </a>
                <a
                  href="/"
                  className="text-white text-sm font-medium hover:bg-white hover:text-black rounded-lg p-2 text-transform: uppercase"
                >
                  About us
                </a>
                <a
                  href="/"
                  className="text-white text-sm font-medium hover:bg-white hover:text-black rounded-lg p-2 text-transform: uppercase"
                >
                  Contact us
                </a>
                <a
                  href="/"
                  className="text-white text-sm font-medium hover:bg-white hover:text-black rounded-lg p-2 text-transform: uppercase"
                >
                  Careers
                </a>
              </div>
            </div>
            {/* Hamburger button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <path
                      d="M4 18L20 18"
                      stroke-width="3"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12L20 12"
                      stroke-width="3"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6L20 6"
                      stroke-width="3"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Create the view when click hamburger */}
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block text-sm font-medium hover:bg-white hover:text-black rounded-lg p-2 text-transform: uppercase"
              >
                Services
              </a>
              <a
                href="/"
                className="text-white block text-sm font-medium hover:bg-white hover:text-black rounded-lg p-2 text-transform: uppercase"
              >
                About us
              </a>
              <a
                href="/"
                className="text-white block text-sm font-medium hover:bg-white hover:text-black rounded-lg p-2 text-transform: uppercase"
              >
                Contact us
              </a>
              <a
                href="/"
                className="text-white block text-sm font-medium hover:bg-white hover:text-black rounded-lg p-2 text-transform: uppercase"
              >
                Careers
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar