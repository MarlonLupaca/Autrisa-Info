'use client';
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const VisualQuiz = ({ content }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Saber si la respuesta elegida es correcta
  const selectedOption = selectedAnswer !== null ? content.options[selectedAnswer] : null;
  const isCorrect = selectedOption?.correct;

  return (
    <div className="space-y-6 text-mainAutrisa">
      {/* Pregunta */}
      <div className="flex justify-center items-center gap-2 text-center">
        <div>{content.icon}</div>
        <p className="text-mainAutrisa font-bold text-[14px] sm:text-xl w-[450px]">{content.question}</p>
      </div>

      {/* Opciones */}
      <div className="grid sm:grid-cols-2 gap-4">
        {content.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`py-6 px-2 text-[13px] rounded-2xl transition-all transform hover:scale-105 cursor-pointer ${
              selectedAnswer === null
                ? 'hover:bg-blue-100 border-2 border-mainAutrisa'
                : selectedAnswer === index
                ? option.correct
                  ? 'bg-emerald-500 text-white scale-105'
                  : 'bg-red-500 text-white'
                : option.correct
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            <div className="flex justify-start items-center gap-3 text-start text-[14px] px-5">
              <div className="mb-2 flex justify-center">{option.icon}</div>
              <div className="font-semibold">{option.text}</div>
            </div>
          </button>
        ))}
      </div>

      {selectedAnswer !== null && !isCorrect && (
        <div className="bg-red-100 border-2 border-red-400 rounded-2xl p-4 text-center animate-fadeIn">
          <p className="text-red-700 font-semibold italic">{selectedOption.feedback}</p>
        </div>
      )}

      {selectedAnswer !== null && (
        <div className="bg-[#e6eeff] rounded-2xl p-6 text-center border-4 border-mainAutrisa animate-fadeIn">
          <Sparkles className="w-10 h-10 mx-auto mb-3 text-mainAutrisa" />
          <p className="text-mainAutrisa font-semibold">{content.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default VisualQuiz;
