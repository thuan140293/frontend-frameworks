import React, { ReactNode } from 'react';

interface CenterAlignProps {
  children: ReactNode;
}

const CenterAlign: React.FC<CenterAlignProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      {children}
    </div>
  );
};

export default CenterAlign;
