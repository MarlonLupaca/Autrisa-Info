'use client';
import { useState } from 'react';
import { Download } from 'lucide-react';
import HeaderAustrisa from '../components/HeaderAustrisa';
import HomeAustrisa from './HomeAustrisa';

export default function AboutPage() {
  const [showPDF, setShowPDF] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-20">
      <HeaderAustrisa />

      <div className="w-full text-center pt-8 pb-6 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-4xl md:text-6xl font-bold text-mainAutrisa mb-4 leading-tight">Atención de Clientes</p>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Conoce nuestro proceso de atención paso a paso para brindarte el mejor servicio
          </p>

          <div className="text-white lg:text-[18px] text-[15px] font-bold flex justify-center items-center gap-4 mt-4">
            <button
              className="bg-mainAutrisa px-3 py-1 rounded-[8px] w-fit cursor-pointer hover:bg-mainAutrisa/90 transition-colors"
              onClick={() => setShowPDF(true)}
            >
              Ver documentación
            </button>
            <button
              className="bg-mainAutrisa px-3 py-1 rounded-[8px] w-fit cursor-pointer hover:bg-mainAutrisa/90 transition-colors"
              onClick={() => setShowVideo(true)}
            >
              Video
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-mainAutrisa rounded-full"></div>
            <div className="h-1 w-12 bg-mainAutrisa/50 rounded-full"></div>
            <div className="h-1 w-12 bg-mainAutrisa/30 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12">
        <HomeAustrisa />
      </div>

      <div className="w-full py-12 bg-gradient-to-t from-mainAutrisa/5 to-transparent">
        <div className="text-center text-gray-500 text-sm">
          <p>¿Tienes dudas? Estamos aquí para ayudarte</p>
        </div>
      </div>

      {showPDF && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowPDF(false)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-7xl h-[90vh] sm:h-[92vh] flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-200 bg-white sticky top-0 z-10">
              <h3 className="text-base sm:text-xl font-bold text-mainAutrisa">
                Documentación - Procesos Identificados
              </h3>

              <div className="flex items-center gap-3">
                {/* Botón de descarga */}
                <a
                  href="/docs/Procesos_Identificados.pdf"
                  download
                  className="flex items-center gap-2 px-3 py-1.5 text-gray-500 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm font-medium">Descargar</span>
                </a>

                {/* Cerrar */}
                <button
                  onClick={() => setShowPDF(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  ×
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="/docs/Procesos_Identificados.pdf"
                className="w-full h-full rounded-b-lg"
                title="Documento PDF"
              />
            </div>
          </div>
        </div>
      )}

      {showVideo && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-5xl flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-200">
              <h3 className="text-base sm:text-xl font-bold text-mainAutrisa">Video Tutorial - Proceso de Atención</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
              >
                ×
              </button>
            </div>

            <div className="relative w-full bg-black aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/mtwjm7x1sUc"
                title="Video Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
