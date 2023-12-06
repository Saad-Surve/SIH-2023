import { Button, Input, Link, Popover, PopoverContent, PopoverTrigger, ScrollShadow } from '@nextui-org/react'
import admin from '../../assets/admin.jpg'
import React from 'react'
import { Icon } from '@iconify/react'
import './Admin.css'

const PendingRequests = () => {
    const data = [
        {
            'name':'Adv. Mrunmayee Deshmukh',
            'idProof':'default_thumbnail.jpg'
        },
        {
            'name':'Adv. Mrunmayee Deshmukh',
            'idProof':'default_thumbnail.jpg'
        },
        {
            'name':'Adv. Mrunmayee Deshmukh',
            'idProof':'default_thumbnail.jpg'
        },
        {
            'name':'Adv. Mrunmayee Deshmukh',
            'idProof':'default_thumbnail.jpg'
        },
    ]
    return (
    <div className='w-full  flex justify-center items-center relative'>
        <div className='bg-cover bg-center w-full h-screen absolute opacity-90 bg-gradient-to-t brightness-[25%] saturate-150' style={{backgroundImage:`url(${admin})`}}></div>
        <div className='bg-white/[0.81] w-3/5 h-3/5 flex flex-col py-6 items-center justify-center  rounded-[40px] z-10 '> 
            <div className='h-1/5 w-4/5 text-center font-mulish'>Pending Lawyer Requests</div>
            <ScrollShadow className='w-[90%] text-[#585874]  max-h-3/5 admin font-bold overflow-y-auto text-xl grid grid-cols-4'>
                <span className='border-b-2 col-span-2 text-center text-black border-[#6E6E91] p-4'>Name</span>
                <div className='border-b-2  relative border-[#6E6E91]'>
                    <span  className='text-xl text-black text-center absolute left-1/2 top-1/2 w-full p-2 -translate-x-1/2 -translate-y-1/2' >
                        ID Proof
                    </span>
                </div>                
                <span className='border-b-2 border-[#6E6E91] p-4'></span>
                {
                    data.map((item,index)=>{
                        return (
                            <>
                                <span className='border-b-2 col-span-2 border-[#6E6E91]  p-4'>{`${index+1}. ${item.name}`}</span>
                                <div className='border-b-2 relative  border-[#6E6E91]'>
                                    <a target='_blank' className='text-xl text-center w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-1' href={`http://localhost:5000/${item.idProof}`}>
                                        View Document
                                    </a>
                                </div>
                                <span className='border-b-2 border-[#6E6E91] p-4'>
                                    <Popover placement="left-start" showArrow={true}>
                                        <PopoverTrigger>
                                        <Icon
                                            icon="pepicons-pencil:dots-y"
                                            className="ml-auto mr-6 h-6 w-6 hover:text-text-gray hover:border-1 hover:bg-gray-200 hover:rounded-[50%] hover:p-1 hover:h-8 hover:w-8 hover:mr-5 "
                                        />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                        <Button color="primary" variant="light" className=" px-4">
                                            <Icon icon="icon-park-solid:correct" />
                                            Accept Request
                                        </Button>
                                        <Button color="danger" variant="light" className="px-4">
                                            <Icon icon="maki:cross" />
                                            Reject Request
                                        </Button>
                                        </PopoverContent>
                                    </Popover>
                                </span>
                            </>
                        )
                    }
                    )
                }
                
              </ScrollShadow>
            <div className='w-3/5 h-1/5 flex gap-10'>
                <Link href='/newAdmin' className='w-full'>
                    <Button className='w-full' color="secondary" size="large">
                        Make New Admin
                    </Button>
                </Link>
                <Link href='/updateContent' className='w-full'>
                    <Button className='w-full' color="secondary" size="large">
                        Update Content
                    </Button>
                </Link>
            </div>
        </div>
    </div>  
  )
}

export default PendingRequests