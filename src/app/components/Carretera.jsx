import React from 'react';

const Carretera = () => {
  return (
    <div className="w-full absolute z-0 top-0 py-5">
      <svg className="m-auto max-w-[900px]" viewBox="0 0 600 1300" preserveAspectRatio="xMidYMid meet">
        <defs>
          <style>
            {`
              @keyframes drive {
                from { stroke-dashoffset: 0; }
                to { stroke-dashoffset: -1000; }
              }
              .road-lines {
                animation: drive 15s linear infinite;
              }
            `}
          </style>
        </defs>

        {/* Carretera principal */}

        <path
          d="
              M 100 50
              L 100 250
              Q 100 400, 300 400
              Q 500 400, 500 550
              L 500 750
              Q 500 900, 300 900
              Q 100 900, 100 1050
              L 100 1250
            "
          fill="none"
          stroke="#01156b"
          strokeWidth="80"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Líneas blancas animadas */}
        <path
          className="road-lines"
          d="
              M 100 50
              L 100 250
              Q 100 400, 300 400
              Q 500 400, 500 550
              L 500 750
              Q 500 900, 300 900
              Q 100 900, 100 1050
              L 100 1250
            "
          fill="none"
          stroke="white"
          strokeWidth="8"
          strokeDasharray="40 30"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Carretera;
