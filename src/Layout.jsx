import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LinkContextProvider from './context/LinkContextProvider'
function Layout() {
  return (
    <>
        <LinkContextProvider>
        <Header/>
        <Outlet/>
        <Footer/>
        </LinkContextProvider>
    </>
  )
}

export default Layout