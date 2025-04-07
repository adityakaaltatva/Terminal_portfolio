import React, { useState, useEffect } from 'react';

export function Boot() {
  const [bootStage, setBootStage] = useState(0);
  const stages = [
    'Initializing terminal...',
    'Loading assets...',
    'Configuring environment...',
    'Boot sequence complete.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBootStage(prev => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-2">
        {stages.slice(0, bootStage + 1).map((stage, i) => (
          <p key={i} className="animate-pulse">
            {stage}
          </p>
        ))}
      </div>
    </div>
  );
}