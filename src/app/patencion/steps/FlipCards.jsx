'use client';
import React, { useState } from 'react';
import { Zap } from 'lucide-react';

const FlipCards = ({ content }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-6 text-mainAutrisa">
      <div className="text-center flex justify-center items-center gap-3">
        <div className="">{content.icon}</div>
        <p className="text-mainAutrisa font-bold text-[16px] md:text-xl">{content.intro}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {content.cards.map((card, index) => (
          <div key={index} className="group perspective cursor-pointer" onClick={() => toggleCheck(index)}>
            <div
              className={`relative w-full h-30 transition-transform duration-500 ${
                checkedItems[index] ? '[transform:rotateY(180deg)]' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="absolute inset-0 bg-mainAutrisa rounded-2xl p-6 flex items-center justify-center text-white gap-4"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="mb-2">{card.icon}</div>
                <p className="font-bold text-center">{card.title}</p>
              </div>

              <div
                className="absolute inset-0 bg-emerald-500 rounded-2xl p-6 flex items-center justify-center text-white"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="text-center font-semibold text-[15px]">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-4 text-center">
        <Zap className="w-8 h-8 mx-auto mb-2 text-amber-600" />
        <p className="text-amber-900 font-bold">{content.tip}</p>
      </div>
    </div>
  );
};

export default FlipCards;
