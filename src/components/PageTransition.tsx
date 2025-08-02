import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  transitioning: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, transitioning }) => {
  return (
    <div className={`transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
      {children}
    </div>
  );
};

export default PageTransition;