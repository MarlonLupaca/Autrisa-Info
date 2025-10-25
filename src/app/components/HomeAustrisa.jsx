'use client';
import React, { useState } from 'react';
import Carretera from './Carretera';
import Image from 'next/image';
import StepModal from './StepModal';
import { stepsData } from './stepsData'; // ✅ nueva importación

const HomeAustrisa = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(null);

  const openModal = (stepNumber) => {
    setCurrentStep(stepNumber);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setCurrentStep(null), 300);
  };

  return (
    <>
      <div className="text-black w-full flex flex-col items-center justify-center mt-20 relative py-5">
        <Carretera />

        {/* PASO 1 */}
        <div className="w-full flex justify-end z-10 pl-[25vw] pr-[8vw]">
          <div
            className="relative pt-10 flex flex-col justify-center items-center h-[200px] xs:h-[220px] xs1:h-[240px]
            xs2:h-[300px] sm:h-[370px] md:h-[440px] lg:h-[500px] w-full"
          >
            <div className="flex items-center absolute top-0 cursor-pointer group" onClick={() => openModal(1)}>
              <div className="text-[30px] font-extrabold bg-white rounded-full text-mainAutrisa h-[50px] w-[50px] flex justify-center items-center border-4 border-dashed border-mainAutrisa group-hover:scale-110 transition-transform">
                <span>1</span>
              </div>
              <span className="pl-3 text-[1.3rem] sm:text-[2.2rem] font-extrabold text-nowrap text-mainAutrisa group-hover:underline">
                Recibe al Cliente
              </span>
            </div>
            <Image
              src="/paso1.png"
              className="object-contain h-full w-fit rounded-4xl"
              alt="paso1"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* PASO 2 */}
        <div className="w-full flex z-10 pl-[8vw] pr-[25vw] mt-[100px] xs:mt-[120px] xs1:mt-[150px] lg:mt-[210px]">
          <div
            className="relative pt-10 flex flex-col justify-center items-center h-[200px] xs:h-[220px] xs1:h-[240px]
            xs2:h-[300px] sm:h-[370px] md:h-[440px] lg:h-[500px] w-full"
          >
            <div className="flex items-center absolute top-0 cursor-pointer group" onClick={() => openModal(2)}>
              <div className="text-[30px] font-extrabold bg-white rounded-full text-mainAutrisa h-[50px] w-[50px] flex justify-center items-center border-4 border-dashed border-mainAutrisa group-hover:scale-110 transition-transform">
                <span>2</span>
              </div>
              <span className="pl-3 text-[1.05rem] xs1:text-[1.4rem] sm:text-[2rem] lg:text-[2.2rem] font-extrabold text-nowrap text-mainAutrisa group-hover:underline">
                Despacha Combustible
              </span>
            </div>
            <Image
              src="/paso2.png"
              className="object-contain h-full w-fit rounded-4xl"
              alt="paso2"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* PASO 3 */}
        <div className="w-full flex z-10 pl-[25vw] pr-[8vw] mt-[130px] xs:mt-[130px] xs1:mt-[150px] lg:mt-[230px]">
          <div
            className="relative pt-10 flex flex-col justify-center items-center h-[200px] xs:h-[220px] xs1:h-[240px]
            xs2:h-[300px] sm:h-[370px] md:h-[440px] lg:h-[500px] w-full"
          >
            <div className="flex items-center absolute top-0 cursor-pointer group" onClick={() => openModal(3)}>
              <div className="text-[30px] font-extrabold bg-white rounded-full text-mainAutrisa h-[50px] w-[50px] flex justify-center items-center border-4 border-dashed border-mainAutrisa group-hover:scale-110 transition-transform">
                <span>3</span>
              </div>
              <span className="pl-3 text-[1.05rem] xs1:text-[1.4rem] sm:text-[2rem] lg:text-[2.2rem] font-extrabold text-nowrap text-mainAutrisa group-hover:underline">
                Termina despacho
              </span>
            </div>
            <Image
              src="/paso3.png"
              className="object-contain h-full w-fit rounded-4xl"
              alt="paso3"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <StepModal isOpen={modalOpen} onClose={closeModal} stepData={currentStep ? stepsData[currentStep] : null} />
    </>
  );
};

export default HomeAustrisa;
