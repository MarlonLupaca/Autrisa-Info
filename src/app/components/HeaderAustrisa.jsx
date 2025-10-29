'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const HeaderAustrisa = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const procesos = [
    { id: 1, nombre: 'P. Atención de Clientes', link: '/patencion' },
    { id: 2, nombre: 'P. Descarga de Combustible', link: '/mantenimiento' },
    { id: 3, nombre: 'P. Descarga de GLP Automotriz', link: '/mantenimiento' },
    { id: 4, nombre: 'P. Control Metrológico Dispensadores', link: '/mantenimiento' },
  ];

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isDropdownOpen) {
        if (window.innerWidth >= 1024) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex sm:px-6 h-20 lg:px-8">
        <div className="flex justify-between items-center w-full">
          <div className="flex-shrink-0">
            <Image src="./logo-autrisa.svg" width={350} height={350} alt="Autrisa Logo" className="h-10 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center space-x-2">
            <a href="/">
              <button className="hover:bg-gray-500/10 rounded-xl cursor-pointer relative px-4 py-2 text-gray-700 font-bold text-[20px] transition-all duration-300 hover:text-mainAutrisa group flex items-center">
                <span>Home</span>
              </button>
            </a>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:bg-gray-500/10 rounded-xl cursor-pointer relative px-4 py-2 text-gray-700 font-bold text-[20px] transition-all duration-300 hover:text-mainAutrisa group flex items-center"
                aria-expanded={isDropdownOpen}
              >
                <span className="relative z-10">Procesos</span>
                <svg
                  className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={` border-l-4 border-mainAutrisa absolute left-1/2 transform -translate-x-1/2 mt-2 w-72 rounded-md shadow-lg bg-white   origin-top-right transition-all duration-300 ${
                  isDropdownOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
                style={{ zIndex: 60 }}
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {procesos.map((proceso) => (
                    <a
                      key={proceso.id}
                      href={`${proceso.link}`}
                      className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100 hover:text-mainAutrisa whitespace-nowrap"
                      role="menuitem"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {proceso.nombre}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsDropdownOpen(false);
            }}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 relative hover:text-mainAutrisa group cursor-pointer border-2 border-white hover:border-mainAutrisa"
            aria-label="Toggle menu border"
          >
            <div className=" absolute w-full h-full bg-mainAutrisa opacity-0 group-hover:opacity-10 rounded-md"></div>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
          <div className="border-b border-gray-200">
            <a href="/">
              <button className="hover:bg-gray-500/10 rounded-xl cursor-pointer relative px-4 py-2 text-gray-700 font-bold text-[20px] transition-all duration-300 hover:text-mainAutrisa group flex items-center w-full">
                <span>Home</span>
              </button>
            </a>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative w-full text-left px-4 py-3 rounded-lg text-base text-[20px] font-bold text-gray-700 hover:text-mainAutrisa transition-all duration-300 group flex justify-between items-center"
            >
              <span className="relative z-10">Procesos</span>
              <svg
                className={`h-5 w-5 transform transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute inset-0 bg-mainAutrisa opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300"></span>
            </button>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              isDropdownOpen ? 'max-h-96 pt-1' : 'max-h-0'
            }`}
          >
            <div className="pl-4 border-l-2 border-mainAutrisa space-y-1">
              {procesos.map((proceso, index) => (
                <a
                  key={proceso.id}
                  href={`${proceso.link}`}
                  className="block px-4 py-2 text-[18px] text-gray-600 hover:bg-gray-100 hover:text-mainAutrisa rounded-md transition-colors duration-200"
                  onClick={closeMenus}
                >
                  {proceso.nombre}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAustrisa;
