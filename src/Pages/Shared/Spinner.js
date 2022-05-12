import React from 'react';

const Spinner = () => {
    return (
      <div className="flex items-center justify-center min-h-[60vh] ">
        <div className="w-16 h-16 border-b-4 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
};

export default Spinner;