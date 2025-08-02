import React from 'react';

const InfiniteMarquee: React.FC = () => {
  const messages = [
    'Stay Safe Online',
    'Protect Your Data',
    'Report Suspicious Activity',
    'Verify Before You Trust',
    'Keep Software Updated',
    'Use Strong Passwords',
    'Enable Two-Factor Authentication',
    'Be Cyber Aware'
  ];

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500 py-2 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center space-x-8 whitespace-nowrap">
              {messages.map((message, index) => (
                <React.Fragment key={`${setIndex}-${index}`}>
                  <span className="text-white font-semibold text-lg">{message}</span>
                  <span className="text-green-200">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;