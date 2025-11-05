'use client';
import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const StepModalNavigation = ({ currentStep, totalSteps, onPrev, onNext, onComplete }) => {
  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 rounded-b-3xl flex justify-between">
      <button
        onClick={onPrev}
        disabled={currentStep === 0}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
          currentStep === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
        }`}
      >
        <ArrowLeft size={20} />
        Anterior
      </button>

      {currentStep === totalSteps - 1 ? (
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all bg-emerald-500 text-white hover:shadow-lg hover:scale-105 cursor-pointer"
        >
          ¡Completado!
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all bg-mainAutrisa text-white hover:shadow-lg"
        >
          Siguiente
          <ArrowRight size={20} />
        </button>
      )}
    </div>
  );
};

export default StepModalNavigation;
