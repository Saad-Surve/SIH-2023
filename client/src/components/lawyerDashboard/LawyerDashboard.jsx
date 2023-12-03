import { Icon } from '@iconify/react'
import { Button } from '@nextui-org/react'
import React from 'react'
import CustTable from '../UI/CustTable'

const IconContainer = (iconName) =>{
    return(
        <div className='border-2 border-[#585874] rounded-full p-2'>
            <Icon className="w-8 h-8 text-[#585874]" icon={iconName.iconName} />
        </div>
    )
}

const LawyerDashboard = () => {
  return (
    <div className='w-full flex'>
        <div className='w-[60%] h-full p-6'>
            <div className='flex  justify-center items-center w-full gap-2'>
                <Button className='flex bg-[#E5F0FF] rounded-3xl justify-between text-xl font-semibold py-10 w-1/2'  endContent={<IconContainer iconName="ic:sharp-edit"/>}>
                    Start a post ...
                </Button>    
                <Button className='flex bg-[#E5F0FF] rounded-3xl justify-between text-xl font-semibold py-10 w-1/2'  endContent={<IconContainer iconName="mdi:video"/>}>
                    Upload a video ...
                </Button>      
            </div>
            <CustTable />
        </div>
        <div className='w-[40%] bg-red-700 h-full'>ff</div>
    </div>
  )
}

export default LawyerDashboard