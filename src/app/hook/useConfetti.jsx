'use client';
import { useEffect } from 'react';

export const useConfetti = () => {
  useEffect(() => {
    if (!window.confetti) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const launchConfetti = () => {
    if (window.confetti) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        window.confetti({
          particleCount: 5,
          angle: 90,
          spread: 90,
          origin: { x: Math.random(), y: 0 },
          startVelocity: 20,
          gravity: 1,
          ticks: 200,
          scalar: 1.2,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  };

  return launchConfetti;
};
