// src/components/Preprocess/Preprocess.jsx
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import linkContext from '../../context/linkContext';
import Table from '../Table/Table';

function Preprocess() {
  const { link } = useContext(linkContext);
  const [dataDescription, setDataDescription] = useState(null);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await axios.post(
          '/api/v1/preprocess/getdatadescription/',
          { link }
        );
        const processedData = Object.entries(response.data.data.processed).map(
          ([key, value]) => ({
            Column: key,
            ...value
          })
        );
        setDataDescription(processedData);
        console.log('Uploaded File Description:', processedData);
      } catch (error) {
        console.log('Error processing file:', error);
      }
    };
    fetchDescription();
  }, [link]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-8">Data Description</h1>
      <Table data={dataDescription} />
    </div>
  );
}

export default Preprocess;
