import React from 'react'
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <hr className="h-0.5 bg-black border-2"></hr>
      <Footer/>
    </div>
  )
}

export default Layout