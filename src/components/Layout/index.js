import React from 'react'
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

function Layout() {
  return (
    <div>
      <div className='mb-12'>
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout