import React, { useRef, useState } from 'react'
import registerUser from '../../assets/registerUser.jpg'
import {Input, useDisclosure,Button,Link} from "@nextui-org/react";
import { Icon } from '@iconify/react';
import axios from 'axios';
import ServerUrl from '../../constants';
import CustModal from '../UI/Modal';


const RegisterUser = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [user, setUser] = useState({
    username:'',
    emailID:'',
    password:'',
  })
  const [usernameExists, setUsernameExists] = useState(false)
  const [contentModal,setContentModal] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setIsLoading(true)

    if(!user.username||!user.emailID||!user.password){
      onOpen()
      setContentModal('Please fill all the fields')
      setIsLoading(false)
      return
    }

    if(usernameExists){
      return
    }

    let response = await axios.post(`${ServerUrl}/api/auth/registerUser`,user)

    if(response.data.userExists){
      onOpen()
      setContentModal('User already exists')
      return
    }

    if(response.data.success){
      //set the token of the response.data to a cookie 
      document.cookie = `token=${response.data.token}; path=/; max-age=${60*60*24*30}`
      //redirect to the dashboard
      window.location.href='/loginUser'

    }


    setIsLoading(false)

  }

  const handleUsernameChange=async(e)=>{
    setUser({...user,username:e.target.value})
    let response = await axios.get(`${ServerUrl}/api/auth/checkUsernameUser/?username=${e.target.value}`)
    if(response.data.usernameExists){
      setUsernameExists(true)
    }else{
      setUsernameExists(false)
    }
  }

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  return (
    <section className='w-full relative'>
        <div className='bg-cover bg-center w-full h-full absolute  opacity-10' style={{backgroundImage:`url(${registerUser})`}}></div>

        <div className='flex h-full'>
          <div className='w-[35%] gap-6 items-center justify-center h-full flex flex-col' >
              <span>Register as a User </span>
              <form onSubmit={handleSubmit} className=' w-[80%] flex flex-col justify-center items-center  bg-[#C0DAFF] gap-6 p-6 rounded-2xl'>
                <Input 
                  type=""  
                  color={usernameExists ? "danger" : ""} 
                  isInvalid={usernameExists} 
                  errorMessage={usernameExists?"Username already taken":''} 
                  required 
                  label="Username"  
                  name='username' 
                  onChange={handleUsernameChange}  
                  placeholder="Enter a username" 
                />
                <Input type="" required label="Email" name='emailID' onChange={handleChange} placeholder="Enter your email" />
                <Input type="password" required label="Password" name='password' onChange={handleChange} placeholder="Enter your password" />
                <Button  type='submit' color="primary" isLoading={isLoading} className='w-auto'>
                  {isLoading?'Registering':'Register'}
                </Button>
                <CustModal isOpen={isOpen} onOpenChange={onOpenChange} title='Error Message' content={contentModal} />
                <span className='text-sm'>
                  Already have an account? <Link className='text-sm' href='/loginUser'>Login</Link>
                </span>
              </form>
          </div>
          <div className='w-[65%] h-full flex flex-col gap-6  justify-center'>
            <div className='text-xl flex flex-col gap-2 font-medium'>
              <h1 className='text-2xl'>Get full access of our website by signing up as a user!</h1>
              <ul className='list-disc list-inside font-light'>
                <li>Consult a lawyer</li>
                <li>Talk with a lawyer near you</li>
                <li>Explore user benefits</li>
              </ul>
            </div>
            <div className='bg-[#A8A8BD] w-[95%] p-6 text-base rounded-xl font-medium flex items-center justify-around '>
              
              <div className='flex items-center gap-2'>
                <div className='bg-white rounded-full p-2'>
                  <Icon className="w-12 h-12 text-[#006AFF]" icon="clarity:language-solid" />
                </div>
                <span className='text-center'>MultiLingual Support</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='bg-white rounded-full p-2'>
                  <Icon className="w-12 h-12 text-[#006AFF]" icon="carbon:condition-point" />
                </div>
                <span className='text-center'>Scenario Wise Expert Help</span>
              </div>
              <div className='flex items-center'>
                <div className='bg-white rounded-full p-2'>
                  <Icon className="w-12 h-12 text-[#006AFF]" icon="fluent:people-community-48-filled" />
                </div>
                <span className='text-center'>Connect with Multiple Lawyers</span>
              </div>
              

            </div>
            <div className='text-xl flex flex-col gap-2 font-medium'>
              <h1 className='text-2xl'>Want to contribute as a lawyer?</h1>
              <ul className='list-disc list-inside font-light'>
                <li>Take up cases in your area</li>
                <li>Update people by posting articles</li>
                <li>Provide consultation in your expertise</li>
              </ul>
            </div>
            <div className='bg-[#C3DDFF] w-3/4 rounded-xl flex items-center p-3'>
              <Link className='font-semibold text-xl flex gap-3 w-full pl-6' href='/registerLawyer'>
                  <span>Register as a Lawyer </span>
                  <Icon className="w-12 h-12 text-[#006AFF]" icon="teenyicons:arrow-right-solid" />

              </Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default RegisterUser