import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import linkContext from '../../context/linkContext';

const UploadCSV = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();
  const {setLink}=useContext(linkContext)
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first');
      return;
    }

    setIsUploading(true);
    setUploadStatus('');

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', `${import.meta.env.VITE_CLOUDINARY_PRESET_NAME}`);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`,
        formData
      );
      setUploadStatus('File uploaded successfully!');
    //   console.log('Uploaded File URL:', response.data.secure_url);
      const docLink=response.data.secure_url
      
      setLink(docLink)
      setIsUploading(false);
      setTimeout(() => {
      navigate('/choice');
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.log('Error uploading file:', error);
      setUploadStatus('Error uploading file. Please try again.');
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white text-black">
      <div className="w-96 p-8 rounded-lg shadow-lg bg-gray-100 border border-gray-300">
        <div
          className={`p-4 border-2 border-dashed rounded-lg cursor-pointer transition ${
            isDragging ? 'border-gray-600 bg-gray-200' : 'border-gray-400 bg-white'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
            id="fileInput"
          />
          <label htmlFor="fileInput" className="text-center block">
            {selectedFile ? (
              <span>Selected File: {selectedFile.name}</span>
            ) : (
              <span>Drag & Drop your CSV file here or click to select</span>
            )}
          </label>
        </div>
        <button
          onClick={handleUpload}
          className="mt-4 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
        {uploadStatus && (
          <p className="mt-4 text-center">{uploadStatus}</p>
        )}
      </div>
    </div>
  );
};

export default UploadCSV;
