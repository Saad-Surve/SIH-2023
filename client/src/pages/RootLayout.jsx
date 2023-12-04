import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Sidebar from '../components/UI/Sidebar'
import {CircularProgress} from "@nextui-org/react";


const RootLayout = () => {
  const navigation = useNavigation()
  return (
    <main className='flex text-3xl'>
      <Sidebar />
      {
        navigation.state === 'loading' ?
          <div className='flex flex-col items-center h-screen bg-gray-200 w-full justify-center gap-3 sm:text-base'>
            <span className='text-2xl'>Have patience, we are loading your data...</span> 
              <CircularProgress size='lg' classNames={{
                svg:"w-36 h-36"
              
              }} />
          </div>
        :
        <Outlet />
 
      }
    </main>
  )
}

export default RootLayout