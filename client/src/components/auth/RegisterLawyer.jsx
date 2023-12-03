import React from 'react'
import registerUser from '../../assets/registerUser.jpg'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { Icon } from '@iconify/react';


const RegisterLawyer = () => {
  return (
    <section className='w-full relative'>
        <div className='bg-cover bg-center w-full h-full absolute  opacity-10' style={{backgroundImage:`url(${registerUser})`}}></div>

        <div className='flex flex-col items-center justify-center gap-6 h-full'>
            <div className='flex items-center justify-around w-full'>
                <span>Register as a Lawyer </span>
                <ul className='list-disc list-inside text-lg font-light'>
                    <li>Take up cases in your area</li>
                    <li>Update People by posting articles</li>
                    <li>Provide consultation in your expertise</li>
                </ul>
            </div>
            <div className='w-4/5'>
                <form className='flex flex-wrap justify-center items-center  bg-[#C0DAFF] gap-6 p-6 rounded-2xl'>
                    
                    <div className='w-full flex flex-wrap items-center gap-6'>
                    
                    <Input type="text" className='w-[45%] m-auto' label="Name" placeholder="Enter your Name" />
                    <Input type="email" className='w-[45%] m-auto' label="Email ID" placeholder="Enter your email id" />
                    <Input type="text" className='w-[45%] m-auto' label="Username" placeholder="Set Username" />
                    <Input type="password" className='w-[45%] m-auto' label="Password" placeholder="Enter your password" />
                    <Input type="text" className='w-[45%] m-auto' label="Expertise" placeholder="Enter your expertise" />
                    <Input type="text" className='w-[45%] m-auto' label="Password" placeholder="Enter your experience(in yrs)" />
                    <Input type="text" className='w-[45%] m-auto' label="Location" placeholder="Enter your location" />
                    <Input type="file" className='w-[45%] m-auto' label="ID Proof" placeholder="Upload an ID Proof" />

                    </div>
                    <div className='flex flex-col gap-4'>
                        <Button color="primary" size='large'>
                            Register    
                        </Button>

                        <span className='text-lg'>
                        Already have an account? <Link className='text-lg font-semibold' href='/loginLawyer'>Login</Link>
                        </span>
                    </div>
                </form>
            </div>
            <div>
                <div className='text-xl flex flex-col gap-2 font-medium'>
                    <h1 className='text-2xl'>Get full access of our website by signing up as a user!</h1>
                    <div className='flex items-center justify-between w-full'>
                        <ul className='list-disc list-inside w-1/2 font-light'>
                            <li>Consult a lawyer</li>
                            <li>Talk with a lawyer near you</li>
                            <li>Explore user benefits</li>
                        </ul>
                        <div className='bg-[#C3DDFF]  rounded-xl flex items-center p-3'>
                            <Link className='font-semibold text-xl flex gap-3 w-full px-3' href='/registerLawyer'>
                                <span>Register as a User </span>
                                <Icon className="w-12 h-12 text-[#006AFF]" icon="teenyicons:arrow-right-solid" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
    </section>
  )
}

export default RegisterLawyer