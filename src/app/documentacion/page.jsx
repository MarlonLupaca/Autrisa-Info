'use client';
import { useState } from 'react';
import { Eye, X, ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';
import HeaderAustrisa from '../components/HeaderAustrisa';

const procesos = [
  {
    categoria: 'Principales',
    title: 'I-13-01: Descarga de Combustible',
    url: '/docs/I-13-01-v02-DESCARGA-DE-COMBUSTIBLE-EN-EL-GRIFO.pdf',
    descripcion: 'Proceso de descarga segura de combustibles',
  },
  {
    categoria: 'Principales',
    title: 'I-13-02: Atención de Clientes',
    url: '/docs/I-13-02-v01-PROCESO-DE-ATENCION-AL-CLIENTE.pdf',
    descripcion: 'Procedimiento para la atención y servicio a clientes',
  },
  {
    categoria: 'Principales',
    title: 'I-13-03: Descarga de GLP',
    url: '/docs/I-13-03-V04-DESCARGA-DE-GLP-AUTOMOTRIZ.pdf',
    descripcion: 'Procedimiento para descarga de gas licuado de petróleo',
  },
  {
    categoria: 'Apoyo',
    title: 'I-13-04: Varillado',
    url: '/docs/I-13-04-V01-VARILLADO.pdf',
    descripcion: 'Proceso de medición de tanques mediante varilla',
  },
  {
    categoria: 'Apoyo',
    title: 'I-13-05: Control Metrológico (Líquidos)',
    url: '/docs/I-13-05-V03-CONTROL-METROLOGICO-DISPENSADORES.pdf',
    descripcion: 'Control y verificación metrológica de líquidos',
  },
  {
    categoria: 'Apoyo',
    title: 'I-13-07: Control Metrológico (GLP)',
    url: '/docs/I-13-07-V01-CONTROL-METROLÓGICO-DISPENSADOR-GLP.pdf',
    descripcion: 'Control y verificación metrológica de GLP',
  },
];

const procesosPrincipales = procesos.filter((p) => p.categoria === 'Principales');
const procesosApoyo = procesos.filter((p) => p.categoria === 'Apoyo');

export default function DocumentacionPage() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedPrincipales, setExpandedPrincipales] = useState(true);
  const [expandedApoyo, setExpandedApoyo] = useState(true);

  const openPdfModal = (url) => {
    setSelectedPdf(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdf(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <HeaderAustrisa />

      <div className="max-w-5xl mx-auto p-4 md:p-10 pt-24 md:pt-32">
        {/* Título de la página */}
        <div className="relative mb-12">
          <p className="relative text-center text-[25px] md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mainAutrisa via-mainAutrisa to-mainAutrisa">
            Documentación de Procesos
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-mainAutrisa rounded-full"></div>
            <div className="h-1 w-12 bg-mainAutrisa/50 rounded-full"></div>
            <div className="h-1 w-12 bg-mainAutrisa/30 rounded-full"></div>
          </div>
        </div>

        {/* Procesos Principales */}
        <div className="mb-6">
          <button
            onClick={() => setExpandedPrincipales(!expandedPrincipales)}
            className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-mainAutrisa to-mainAutrisa p-3 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-gray-800">Procesos Principales</h2>
                <p className="text-sm text-gray-500">{procesosPrincipales.length} procesos disponibles</p>
              </div>
            </div>
            {expandedPrincipales ? (
              <ChevronUp className="w-6 h-6 text-mainAutrisa group-hover:scale-110 transition-transform" />
            ) : (
              <ChevronDown className="w-6 h-6 text-mainAutrisa group-hover:scale-110 transition-transform" />
            )}
          </button>

          {expandedPrincipales && (
            <div className="mt-4 space-y-3 pl-4">
              {procesosPrincipales.map((proc) => (
                <div
                  key={proc.title}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 border-l-4 border-mainAutrisa group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">{proc.title}</p>
                      <p className="text-sm text-gray-600">{proc.descripcion}</p>
                    </div>
                    <button
                      onClick={() => openPdfModal(proc.url)}
                      className="ml-4 bg-gradient-to-br from-mainAutrisa to-mainAutrisa hover:opacity-90 text-white p-3 rounded-full transition-all duration-300 group-hover:scale-110 shadow-md hover:shadow-lg cursor-pointer"
                      aria-label="Ver documento"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Procesos de Apoyo */}
        <div className="mb-6">
          <button
            onClick={() => setExpandedApoyo(!expandedApoyo)}
            className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-mainAutrisa to-mainAutrisa p-3 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-gray-800">Procesos de Apoyo</h2>
                <p className="text-sm text-gray-500">{procesosApoyo.length} procesos disponibles</p>
              </div>
            </div>
            {expandedApoyo ? (
              <ChevronUp className="w-6 h-6 text-mainAutrisa group-hover:scale-110 transition-transform" />
            ) : (
              <ChevronDown className="w-6 h-6 text-mainAutrisa group-hover:scale-110 transition-transform" />
            )}
          </button>

          {expandedApoyo && (
            <div className="mt-4 space-y-3 pl-4">
              {procesosApoyo.map((proc) => (
                <div
                  key={proc.title}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 border-l-4 border-mainAutrisa group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{proc.title}</h3>
                      <p className="text-sm text-gray-600">{proc.descripcion}</p>
                    </div>
                    <button
                      onClick={() => openPdfModal(proc.url)}
                      className="ml-4 bg-gradient-to-br from-mainAutrisa to-mainAutrisa hover:opacity-90 text-white p-3 rounded-full transition-all duration-300 group-hover:scale-110 shadow-md hover:shadow-lg cursor-pointer"
                      aria-label="Ver documento"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal para PDF */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white text-mainAutrisa rounded-t-2xl">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6" />
                <p className="text-lg font-semibold">Visualizador de Documento</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedPdf}
                  download
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                  aria-label="Descargar documento"
                >
                  <Download className="w-6 h-6" />
                </a>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Contenido del Modal */}
            <div className="flex-1 p-4 overflow-hidden">
              <iframe
                src={selectedPdf}
                title="Visor de PDF"
                className="w-full h-full rounded-lg border border-gray-200"
              >
                Tu navegador no soporta la visualización de PDFs.
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
