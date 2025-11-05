'use client';
import React, { useState, useEffect } from 'react';

import VisualChecklist from './steps/VisualChecklist';
import DragDrop from './steps/DragDrop';
import VisualQuiz from './steps/VisualQuiz';
import FlipCards from './steps/FlipCards';
import StepModalHeader from './steps/StepModalHeader';
import StepModalNavigation from './steps/StepModalNavigation';
import { useConfetti } from '../hook/useConfetti';

const StepModal = ({ isOpen, onClose, stepData }) => {
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const launchConfetti = useConfetti();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !stepData) return null;

  const nextSubStep = () => {
    if (currentSubStep < stepData.subSteps.length - 1) {
      setCurrentSubStep(currentSubStep + 1);
    }
  };

  const prevSubStep = () => {
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentSubStep(0);
    onClose();
  };

  const handleComplete = () => {
    launchConfetti();
    handleClose();
  };

  const currentContentData = stepData.subSteps[currentSubStep];

  const renderContent = () => {
    const contentProps = {
      content: currentContentData.content,
    };
    const key = currentSubStep;

    switch (currentContentData.type) {
      case 'visual-checklist':
        return <VisualChecklist key={key} {...contentProps} />;
      case 'drag-drop':
        return <DragDrop key={key} {...contentProps} />;
      case 'visual-quiz':
        return <VisualQuiz key={key} {...contentProps} />;
      case 'flip-cards':
        return <FlipCards key={key} {...contentProps} />;
      default:
        return <div key="default-error">Tipo de contenido no reconocido</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4" onClick={handleClose}>
      <div
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <StepModalHeader
          title={stepData.title}
          onClose={handleClose}
          currentStep={currentSubStep}
          totalSteps={stepData.subSteps.length}
        />
        <div className="p-6">{renderContent()}</div>

        <StepModalNavigation
          currentStep={currentSubStep}
          totalSteps={stepData.subSteps.length}
          onPrev={prevSubStep}
          onNext={nextSubStep}
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default StepModal;
