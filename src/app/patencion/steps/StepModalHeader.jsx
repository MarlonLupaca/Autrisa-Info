'use client';
import React from 'react';
import { X } from 'lucide-react';

const StepModalHeader = ({ title, onClose, currentStep, totalSteps }) => {
  return (
    <div className="sticky top-0 bg-mainAutrisa text-white z-[101] flex-col shadow-lg">
      <div className="p-6 flex justify-between items-center">
        <h2 className="md:text-2xl text-[15px] font-bold text-balance">{title}</h2>
        <button
          onClick={onClose}
          className="text-white hover:bg-white hover:text-mainAutrisa cursor-pointer hover:bg-opacity-20 rounded-full p-2 transition-all"
        >
          <X size={24} />
        </button>
      </div>
      <div className="bg-gray-100 p-4">
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentStep
                  ? 'w-8 bg-mainAutrisa'
                  : index < currentStep
                  ? 'w-2 bg-emerald-500'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          Paso {currentStep + 1} de {totalSteps}
        </p>
      </div>
    </div>
  );
};

export default StepModalHeader;
