import { useState } from 'react'
import './App.css'
import UploadPDF from './upload'

function App() {
  const [image, setImage] = useState()

  return (
    <>
      <UploadPDF/>
    </>
  )
}

export default App
