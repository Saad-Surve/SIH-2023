import {motion} from 'framer-motion';
import { didyouknow } from './didyouknow';
import { useEffect, useRef, useState } from 'react';
import bulb from '../../assets/bulb.png'
import { Image } from '@nextui-org/react';

const Page4 = () => {

    const selectedItems = didyouknow.sort(()=> 0.5 - Math.random()).slice(0,5)
    const variants = {
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: 'easeOut',
            duration: 0.3
          }
        },
        hide: {
          y: -20,
          opacity: 0
        }
      };
      
      
      const [index, setIndex] = useState(0)
      
      useEffect(() => {
          const interval = setInterval(() => {
              setIndex((index+1)%5)
          }, 5000);
          return () => clearInterval(interval);
      }  
      , [index])
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center bg-[#9ED0FF]'>
                <div className='w-[30%]'>
                    <Image src={bulb} />
                </div>
                <div className='w-[70%] pr-6 flex flex-col gap-10 justify-center'>
                    <span className='text-9xl font-mulish font-black text-[#05114f]'>Did You Know?</span>
                    <motion.div key={index} variants={variants} animate={'show'} initial="hide">
                        {selectedItems[index]}
                    </motion.div>    
                </div>
            </div>
        </>
    )
}

export default Page4