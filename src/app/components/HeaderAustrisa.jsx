'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const HeaderAustrisa = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const procesos = [
    { id: 1, nombre: 'P. Atención al cliente' },
    { id: 2, nombre: 'P. Control de Invertarios' },
    { id: 3, nombre: 'P. de Limpieza y Mantenimiento' },
    { id: 4, nombre: 'P. Cierre' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex sm:px-6 h-20 lg:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="./logo-autrisa.svg" width={350} height={350} alt="Autrisa Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {procesos.map((proceso) => (
              <a
                key={proceso.id}
                href={`#${proceso.nombre.toLowerCase().replace(/ /g, '-')}`}
                className="relative px-4 py-2 text-gray-700 font-bold text-[17px] transition-all duration-300 hover:text-mainAutrisa group"
              >
                <span className="relative z-10">{proceso.nombre}</span>
                <span className="absolute inset-0 bg-mainAutrisa opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-mainAutrisa group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 relative hover:text-mainAutrisa group cursor-pointer border-2 border-white hover:border-mainAutrisa"
            aria-label="Toggle menu border"
          >
            <div className=" absolute w-full h-full bg-mainAutrisa opacity-0 group-hover:opacity-10 rounded-md"></div>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
          {procesos.map((proceso, index) => (
            <a
              key={proceso.id}
              href={`#${proceso.nombre.toLowerCase().replace(/ /g, '-')}`}
              className="relative block px-4 py-3 rounded-lg text-base text-[17px] font-bold text-gray-700 hover:text-mainAutrisa transition-all duration-300 group"
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{proceso.nombre}</span>
              <span className="absolute inset-0 bg-mainAutrisa opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-mainAutrisa group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderAustrisa;
