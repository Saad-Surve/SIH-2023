import React from 'react'
import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';


const navbar = () => {
  return (
    <div className=' bg-white h-auto p-5 w-full top-0 sticky z-10 border-b-4 flex flex-row'>
        <input type="text" placeholder='search' className='w-1/2 h-10 p-4 bg-gray-100 text-black rounded-lg border-inherit focus:outline-none text-base'/>
        <div className='w-full h-10 gap-2 flex flex-row justify-end items-center'>
        <Icon icon="mingcute:question-line" />
        <Icon icon="material-symbols:settings-outline" />
        <Icon icon="ph:bell-bold" />
        <Avatar name='Yusuf Sodawala' size='35px' round/>
        <div className='flex flex-col'>
            <span className=' text-base'>Yusuf Sodawala</span>
            <span className='text-xs'>yusuf.sodawala@spit.ac.in</span>
        </div>
        <Icon icon="icon-park:down" />
        </div>
    </div>
  )
}

export default navbar