'use client';
import React, { useState } from 'react';
import { HelpCircle, ArrowRight, X, Trophy } from 'lucide-react';

const DragDrop = ({ content }) => {
  const [draggedItems, setDraggedItems] = useState([]);

  const handleDragDrop = (item) => {
    if (!draggedItems.includes(item)) {
      setDraggedItems([...draggedItems, item]);
    }
  };

  const handleRemoveItem = (itemToRemove) => {
    setDraggedItems(draggedItems.filter((item) => item !== itemToRemove));
  };

  const allPlaced = content.correctOrder.every((item) => draggedItems.includes(item));

  return (
    <div className="space-y-5 text-mainAutrisa">
      <div className="text-center flex items-center justify-center gap-2">
        <HelpCircle className="w-15 h-15 animate-bounce text-mainAutrisa" />
        <p className="text-mainAutrisa font-bold text-[15px] md:text-[18px] mb-2">{content.question}</p>
      </div>

      <div className="bg-[#e6eeff] rounded-2xl p-6 min-h-[200px] border-4 border-dashed border-mainAutrisa">
        <p className="text-center text-mainAutrisa font-semibold mb-4 flex items-center justify-center gap-2 text-[12px] md:text-[15px]">
          <ArrowRight className="rotate-90" />
          Click para Poner | Click para Sacar
        </p>
        <div className="space-y-2">
          {draggedItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleRemoveItem(item)}
              className="bg-white p-4 rounded-xl shadow-md font-semibold border-2 border-gray-300 text-gray-700 cursor-pointer transition-all hover:bg-gray-100 relative text-[15px] md:text-[16px]"
            >
              <X className="absolute top-2 right-2 w-4 h-4 text-gray-500" />
              {index + 1}. {item}
            </div>
          ))}
        </div>
      </div>

      {/* Opciones disponibles */}
      <div className="grid md:grid-cols-2 gap-3">
        {content.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleDragDrop(option)}
            disabled={draggedItems.includes(option)}
            className={`p-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
              draggedItems.includes(option)
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-mainAutrisa text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {allPlaced && (
        <div className="bg-emerald-500 text-white rounded-2xl p-6 text-center flex justify-center items-center gap-2 md:px-10">
          <Trophy className="w-16 h-16" />
          <p className="font-bold md:text-xl text-[14px]">¡Perfecto! {content.win}</p>
        </div>
      )}
    </div>
  );
};

export default DragDrop;
