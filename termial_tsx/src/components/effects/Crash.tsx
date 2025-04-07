import React, { useEffect, useState } from 'react';

export function Crash() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage(prev => (prev + 1) % 3);
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-red-900 bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-white text-center space-y-4 glitch">
        <h1 className="text-4xl font-bold">SYSTEM FAILURE:404</h1>
        <p className="text-xl">
          {stage === 0 && 'CRITICAL ERROR'}
          {stage === 1 && 'DATA CORRUPTION'}
          {stage === 2 && 'SYSTEM HALTED '}
        </p>
      </div>
    </div>
  );
}
