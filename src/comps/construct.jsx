import React from 'react';

const UnderConstruction = () => {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-500">Under Construction</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-400">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="mt-10 flex space-x-4">
          <i className="bi bi-cone-striped text-orange-500 text-3xl animate-bounce"></i>
          <i className="bi bi-tools text-white text-3xl animate-bounce"></i>
          <i className="bi bi-hammer text-orange-500 text-3xl animate-bounce"></i>
        </div>
      </div>
    );
};
  
export default UnderConstruction;
