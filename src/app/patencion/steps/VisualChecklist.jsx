'use client';
import React, { useState } from 'react';
import { CheckCircle, Trophy } from 'lucide-react';

const VisualChecklist = ({ content }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const allChecked = content.items.every((_, i) => checkedItems[i]);

  return (
    <div className="space-y-6 text-mainAutrisa ">
      <div className="text-center flex justify-center items-center gap-2">
        <div>{content.icon}</div>
        <p className="text-mainAutrisa font-bold text-[15px] md:text-[18px]">{content.intro}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {content.items.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleCheck(index)}
            className={`relative p-6 rounded-2xl cursor-pointer transition-all transform hover:scale-105 ${
              checkedItems[index]
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'bg-gray-100 hover:bg-[#e6eeff] border-2 border-dashed border-gray-300'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={checkedItems[index] ? 'animate-bounce' : ''}>{item.icon}</div>
              <span
                className={`font-semibold text-sm text-balance ${checkedItems[index] ? 'text-white' : 'text-gray-700'}`}
              >
                {item.text}
              </span>
            </div>

            {checkedItems[index] && (
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg animate-bounce">
                <CheckCircle className="text-emerald-600" size={24} />
              </div>
            )}
          </div>
        ))}
      </div>

      {allChecked && (
        <div className="bg-amber-500 text-white rounded-2xl p-4 px-10 text-center animate-pulse flex justify-center items-center gap-2">
          <Trophy className="w-12 h-12" />
          <p className="font-bold text-[15px] md:text-lg">¡Dominas la primera impresión!</p>
        </div>
      )}
    </div>
  );
};

export default VisualChecklist;
