import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


function Choice() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-white">
    <div className="flex flex-col md:flex-row gap-8">
        <div
        onClick={() => navigate('/process')}
        className="flex items-center justify-between h-40 w-80 p-8 bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-lg shadow-lg cursor-pointer"
        >
        <span className="text-2xl font-semibold">Preprocessing</span>
        <ArrowRightIcon className="h-8 w-8 text-white" />
        </div>
        <div
        onClick={() => navigate('/visualization')}
        className="flex items-center justify-between h-40 w-80 p-8 bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-lg shadow-lg cursor-pointer"
        >
        <span className="text-2xl font-semibold">Visualization</span>
        <ArrowRightIcon className="h-8 w-8 text-white" />
        </div>
    </div>
    </div>

  );
}

export default Choice;
