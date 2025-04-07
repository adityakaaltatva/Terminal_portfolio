import React, { useState, useEffect } from 'react';
import { Terminal } from './components/Terminal';
import { Boot } from './components/Boot';

function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    // Simulate boot sequence
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] font-mono text-[#00ff00] p-4">
      {isBooting ? (
        <Boot />
      ) : (
        <Terminal />
      )}
    </div>
  );
}

export default App;