import React from 'react'
import TypewriterComponent  from 'typewriter-effect'
import logo from '../../assets/logo.png'

const FrontPage = () => {
  return (
    <div className='w-1/2 h-full z-10 flex flex-col items-center justify-around hap-6 ' >
        <div className='h-[35%] flex justify-center gap-3 items-center'>
            <span className='text-6xl font-saira  text-white'>Nyaydoot</span>
            <img src={logo} width={100} height={100} alt="" />
        </div>
        <div className='text-white w-full flex items-center gap-4 tracking-wider font-thin text-5xl flex-col h-[65%]'>
            <div>DELIVERING JUSTICE</div>
            <TypewriterComponent
                onInit={(typewriter) => {
                    typewriter
                        .typeString("IN YOUR OWN LANGUAGE")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("AT YOUR CONVINIENCE")
                        .deleteAll()
                        .typeString("FOR ALL AND EVERYONE.")
                        .start()
                }}
                options={{
                    loop:true
                }}
            />
        </div>
    </div>
  )
}

export default FrontPage