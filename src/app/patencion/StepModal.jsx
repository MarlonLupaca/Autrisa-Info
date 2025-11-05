'use client';
import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Smile,
  HandMetal,
  Eye,
  MessageCircle,
  Ear,
  Sparkles,
  Target,
  HelpCircle,
  Trophy,
  Palette,
  Gem,
  BarChart3,
  Gift,
  Zap,
} from 'lucide-react';

const StepModal = ({ isOpen, onClose, stepData }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [draggedItems, setDraggedItems] = useState([]);
  const [currentSubStep, setCurrentSubStep] = useState(0);

  // 🔒 Bloquear scroll del body al abrir modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Cargar canvas-confetti desde CDN
      if (!window.confetti) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js';
        script.async = true;
        document.body.appendChild(script);
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !stepData) return null;

  const toggleCheck = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleDragDrop = (item) => {
    // Lógica para AÑADIR (poner) la caja
    if (!draggedItems.includes(item)) {
      setDraggedItems([...draggedItems, item]);
    }
  };

  // Función para REMOVER (sacar) la caja
  const handleRemoveItem = (itemToRemove) => {
    setDraggedItems(draggedItems.filter((item) => item !== itemToRemove));
  };

  const nextSubStep = () => {
    if (currentSubStep < stepData.subSteps.length - 1) {
      setCurrentSubStep(currentSubStep + 1);
      setCheckedItems({});
      setSelectedAnswer(null);
      setDraggedItems([]);
    }
  };

  const prevSubStep = () => {
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
      setCheckedItems({});
      setSelectedAnswer(null);
      setDraggedItems([]);
    }
  };

  const handleClose = () => {
    setCurrentSubStep(0);
    setCheckedItems({});
    setSelectedAnswer(null);
    setDraggedItems([]);
    onClose();
  };

  // 🎉 Función para lanzar confeti
  const launchConfetti = () => {
    if (window.confetti) {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
      };

      function fire(particleRatio, opts) {
        window.confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
          spread: 26,
          startVelocity: 55,
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });

      fire(0.2, {
        spread: 60,
      });

      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
  };

  // 🎊 Efecto para lanzar confeti al completar
  const handleComplete = () => {
    launchConfetti();
    setTimeout(() => {
      handleClose();
    }, 2000); // Espera 2 segundos antes de cerrar
  };

  const currentContent = stepData.subSteps[currentSubStep];

  const renderContent = () => {
    // VISUAL CHECKLIST
    if (currentContent.type === 'visual-checklist') {
      const allChecked = currentContent.content.items.every((_, i) => checkedItems[i]);

      return (
        <div className="space-y-6 text-mainAutrisa ">
          <div className="text-center">
            <div className="mb-3">{currentContent.content.icon}</div>
            <p className="text-mainAutrisa font-bold text-xl">{currentContent.content.intro}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentContent.content.items.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleCheck(index)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all transform hover:scale-105 ${
                  checkedItems[index]
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-[#e6eeff] border-2 border-dashed border-gray-300'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={checkedItems[index] ? 'animate-bounce' : ''}>{item.icon}</div>
                  <span className={`font-semibold text-sm ${checkedItems[index] ? 'text-white' : 'text-gray-700'}`}>
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
            <div className="bg-amber-500 text-white rounded-2xl p-6 text-center animate-pulse">
              <Trophy className="w-12 h-12 mx-auto mb-2" />
              <p className="font-bold text-lg">¡Dominas la primera impresión!</p>
            </div>
          )}
        </div>
      );
    }

    // DRAG DROP
    if (currentContent.type === 'drag-drop') {
      const allPlaced = currentContent.content.correctOrder.every((item) => draggedItems.includes(item));

      return (
        <div className="space-y-6 text-mainAutrisa">
          <div className="text-center">
            <HelpCircle className="w-20 h-20 mx-auto mb-4 animate-bounce text-mainAutrisa" />
            <p className="text-mainAutrisa font-bold text-lg">{currentContent.content.question}</p>
          </div>

          {/* Área de destino */}
          <div className="bg-[#e6eeff] rounded-2xl p-6 min-h-[200px] border-4 border-dashed border-mainAutrisa">
            {/* 📝 Texto breve modificado aquí */}
            <p className="text-center text-mainAutrisa font-semibold mb-4 flex items-center justify-center gap-2">
              <ArrowRight className="rotate-90" />
              Click para Poner | Click para Sacar
            </p>
            <div className="space-y-2">
              {draggedItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleRemoveItem(item)}
                  className="bg-white p-4 rounded-xl shadow-md text-center font-semibold border-2 border-gray-300 text-gray-700 cursor-pointer transition-all hover:bg-gray-100 relative"
                >
                  <X className="absolute top-2 right-2 w-4 h-4 text-gray-500" /> {/* Icono de remover */}
                  {index + 1}. {item}
                </div>
              ))}
            </div>
          </div>

          {/* Opciones disponibles */}
          <div className="grid grid-cols-2 gap-3">
            {currentContent.content.options.map((option, index) => (
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
            <div className="bg-emerald-500 text-white rounded-2xl p-6 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-3" />
              <p className="font-bold text-xl">¡Perfecto! {currentContent.content.win}</p>
            </div>
          )}
        </div>
      );
    }

    // VISUAL QUIZ
    if (currentContent.type === 'visual-quiz') {
      return (
        <div className="space-y-6 text-mainAutrisa">
          <div className="text-center">
            <div className="mb-4">{currentContent.content.icon}</div>
            <p className="text-mainAutrisa font-bold text-xl">{currentContent.content.question}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentContent.content.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`py-6 px-2 text-[13px] rounded-2xl transition-all transform hover:scale-105 cursor-pointer ${
                  selectedAnswer === null
                    ? ' hover:bg-blue-100 border-2 border-mainAutrisa'
                    : selectedAnswer === index
                    ? option.correct
                      ? 'bg-emerald-500 text-white scale-105'
                      : 'bg-red-500 text-white'
                    : option.correct
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                <div className="text-center">
                  <div className="mb-2 flex justify-center">{option.icon}</div>
                  <div className="font-semibold">{option.text}</div>
                  {selectedAnswer === index && <div className="mt-2 text-sm italic">{option.feedback}</div>}
                </div>
              </button>
            ))}
          </div>

          {selectedAnswer !== null && (
            <div className="bg-[#e6eeff] rounded-2xl p-6 text-center border-4 border-mainAutrisa">
              <Sparkles className="w-10 h-10 mx-auto mb-3 text-mainAutrisa" />
              <p className="text-mainAutrisa font-semibold">{currentContent.content.explanation}</p>
            </div>
          )}
        </div>
      );
    }

    // FLIP CARDS
    if (currentContent.type === 'flip-cards') {
      return (
        <div className="space-y-6 text-mainAutrisa">
          <div className="text-center">
            <div className="mb-3">{currentContent.content.icon}</div>
            <p className="text-mainAutrisa font-bold text-xl">{currentContent.content.intro}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentContent.content.cards.map((card, index) => (
              <div key={index} className="group perspective cursor-pointer" onClick={() => toggleCheck(index)}>
                <div
                  className={`relative w-full h-40 transition-transform duration-500 ${
                    checkedItems[index] ? '[transform:rotateY(180deg)]' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className="absolute inset-0 bg-mainAutrisa rounded-2xl p-6 flex flex-col items-center justify-center text-white"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="mb-2">{card.icon}</div>
                    <p className="font-bold text-center">{card.title}</p>
                  </div>

                  <div
                    className="absolute inset-0 bg-emerald-500 rounded-2xl p-6 flex items-center justify-center  text-white"
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
            <p className="text-amber-900 font-bold">{currentContent.content.tip}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4" onClick={handleClose}>
      <div
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-mainAutrisa text-white z-[101] flex-col  shadow-lg">
          <div className="p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">{stepData.title}</h2>
            <button
              onClick={handleClose}
              className="text-white hover:bg-white hover:text-mainAutrisa cursor-pointer hover:bg-opacity-20 rounded-full p-2 transition-all"
            >
              <X size={24} />
            </button>
          </div>
          <div className="bg-gray-100 p-4">
            <div className="flex justify-center gap-2">
              {stepData.subSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSubStep
                      ? 'w-8 bg-mainAutrisa'
                      : index < currentSubStep
                      ? 'w-2 bg-emerald-500'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              Paso {currentSubStep + 1} de {stepData.subSteps.length}
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">{renderContent()}</div>

        {/* Navegación */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 rounded-b-3xl flex justify-between">
          <button
            onClick={prevSubStep}
            disabled={currentSubStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
              currentSubStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
            }`}
          >
            <ArrowLeft size={20} />
            Anterior
          </button>

          {currentSubStep === stepData.subSteps.length - 1 ? (
            <button
              onClick={handleComplete}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all bg-emerald-500 text-white hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              ¡Completado! ✓
            </button>
          ) : (
            <button
              onClick={nextSubStep}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all bg-mainAutrisa text-white hover:shadow-lg"
            >
              Siguiente
              <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepModal;
