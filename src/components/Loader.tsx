import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [dots, setDots] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(dotInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // Matrix rain effect
  const MatrixRain = () => {
    const columns = Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="matrix-column"
        style={{
          left: `${i * 2}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      >
        {Array.from({ length: 20 }, (_, j) => (
          <div
            key={j}
            className="matrix-char"
            style={{ animationDelay: `${j * 0.1}s` }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>
    ));
    return <div className="matrix-rain">{columns}</div>;
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden">
      <MatrixRain />
      
      <div className="relative z-10 text-center">
        <div className="cyber-logo mb-8">
          <div className="text-6xl font-bold text-green-400 mb-4 glitch-text">
            CYBER SHIELD
          </div>
          <div className="w-16 h-1 bg-green-400 mx-auto animate-pulse"></div>
        </div>
        
        <div className="mb-8">
          <div className="text-xl text-green-300 mb-4 typing-animation">
            <span className="decryption-text">Initiating cyber shield{dots}</span>
          </div>
          
          <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="text-sm text-green-500 mt-2">
            {Math.round(progress)}% Complete
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <span className="text-green-400">Securing Connection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;