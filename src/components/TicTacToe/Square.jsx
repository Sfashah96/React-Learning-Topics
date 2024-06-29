import React from 'react';
import '../../App.css'

function Square({ value, onClick }) {
  return (
    <button
      className="w-16 h-16 border border-gray-500 text-2xl font-bold flex items-center justify-center"
      onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
