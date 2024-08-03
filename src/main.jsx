import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import UploadPDF from './components/Upload/upload.jsx'
import Choice from './components/Choice/Choice.jsx'
import Preprocess from './components/Preprocess/Preprocess.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<UploadPDF />} />
      <Route path='choice' element={<Choice/>} />
      <Route path='process' element={<Preprocess />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
