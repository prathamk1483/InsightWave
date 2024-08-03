// src/components/Table/Table.jsx
import React from 'react';

const Table = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available.</p>;

  const columns = Object.keys(data[0]);

  return (
    <div className="text-white w-full max-w-5xl p-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="overflow-auto max-h-100 max-w-200">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-gray-900">
              {columns.map((col, index) => (
                <th key={index} className="p-4 border-b border-gray-700">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}`}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="p-4 border-b border-gray-600">{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
