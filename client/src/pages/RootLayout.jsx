import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/UI/Sidebar'

const RootLayout = () => {
  return (
    <main className='flex text-3xl'>
      <Sidebar />
      <Outlet />
    </main>
  )
}

export default RootLayout