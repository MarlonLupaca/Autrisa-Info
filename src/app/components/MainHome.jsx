'use client';
import React, { useState } from 'react';
import { ArrowRight, Circle } from 'lucide-react';
import Image from 'next/image';

const MainHome = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const processes = [
    {
      id: 1,
      number: '01',
      title: 'P. Atención de Clientes',
      description: 'Protocolos de servicio y atención',
      link: '/patencion',
      color: '#01156b',
    },
    {
      id: 2,
      number: '02',
      title: 'P. Descarga de Combustible',
      description: 'Gestión y seguimiento de stock',
      link: '/mantenimiento',
      color: '#0a2080',
    },
    {
      id: 3,
      number: '03',
      title: 'P. Descarga de GLP Automotriz',
      description: 'Estándares de calidad y seguridad',
      link: '/mantenimiento',
      color: '#132a95',
    },
    {
      id: 4,
      number: '04',
      title: 'P. Control Metrológico Dispensadores',
      description: 'Procedimientos de fin de jornada',
      link: '/mantenimiento',
      color: '#1c35aa',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-15">
      <div className="relative overflow-hidden" style={{ backgroundColor: '#01156b' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white text-sm font-medium mb-6">
                Portal de Capacitación
              </div>
              <h1 className="text-[45px] xs:text-[50px] font-bold text-white mb-6 leading-tight lg:text-nowrap">
                Sistema de Entrenamiento
                <br />
                Corporativo
              </h1>
              <p className="text-xl text-white/80 mb-8">Desarrolla competencias clave para la excelencia operativa</p>
            </div>

            <div className="relative rounded-full flex justify-center items-center">
              <Image src="/LogoMain.png" height={450} width={450} alt="Procesos" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#01156b' }}>
              Programas de Capacitación
            </h2>
            <p className="text-gray-600">Selecciona un módulo para comenzar</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {processes.map((process, index) => (
            <a
              key={index}
              href={process.link}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl border border-gray-100 block"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-2 transition-all duration-300"
                style={{
                  backgroundColor: process.color,
                  width: hoveredIndex === index ? '8px' : '4px',
                }}
              ></div>

              <div className="p-8 pl-12">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-7xl font-bold opacity-10 leading-none" style={{ color: process.color }}>
                    {process.number}
                  </span>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: hoveredIndex === index ? process.color : '#f3f4f6',
                    }}
                  >
                    <ArrowRight
                      className="w-6 h-6 transition-colors duration-300"
                      style={{
                        color: hoveredIndex === index ? 'white' : process.color,
                      }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3" style={{ color: '#01156b' }}>
                  {process.title}
                </h3>
                <p className="text-gray-600 mb-6">{process.description}</p>

                <div className="flex items-center gap-3">
                  <Circle className="w-3 h-3 fill-green-500 text-green-500" />
                  <span className="text-sm text-gray-500 font-medium">Disponible</span>
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: process.color }}
              ></div>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">¿Necesitas asistencia?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para resolver cualquier duda sobre los módulos de capacitación
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all">
            Contactar Soporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
