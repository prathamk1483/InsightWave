import React,{useState} from'react';
import axios from'axios';


const UploadPDF=()=>{
    const[selectedFile,setSelectedFile]=useState(null);
    const[uploadStatus,setUploadStatus]=useState('');

    const handleFileChange=(event)=>{
        setSelectedFile(event.target.files[0]);
    }

    const handleUpload=async()=>{
        if(!selectedFile){
            setUploadStatus('Please Select a file first');
            return;
        }
        
        console.log('Cloud Name:', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
        console.log('Upload Preset:', import.meta.env.VITE_CLOUDINARY_PRESET_NAME);


        const formData=new FormData();
        formData.append('file',selectedFile);
        formData.append('upload_preset', `${import.meta.env.VITE_CLOUDINARY_PRESET_NAME}`);
        // formData.append('cloud_name', `${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}`);

        try {
            const response=await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`,formData
            )
            setUploadStatus('File uploaded successfully!');
            console.log('Uploaded File URL:', response.data.secure_url);
        } catch (error) {
            console.log('Error uploading file:',error);
            setUploadStatus('Error uploading file. Please try again.');
        }

    }

    return (
        <div>
            <h2>
                Select file for upload
            </h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <p>{uploadStatus}</p>
        </div>
    )
}


export default UploadPDF;
