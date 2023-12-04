import React from 'react'
import {Image, Divider} from '@nextui-org/react'
import { Icon } from '@iconify/react';

const articleCard = () => {
  return (
    <div className='flex p-4 gap-4 items-center border-b-2'>
        <div>
            <Image 
            alt="Law"
            className='object-cover'
            width={180}
            height={190}
            shadow="md"
            src="/images/nyaaydoot.png"
            />
        </div>
        <div>
            <div className='flex gap-1 text-sm justify-start items-center'>
            <Icon icon="gg:profile" fontSize={20}/>
            <span>K K Venugopal</span>
            <span className='text-gray-500'>&nbsp;&nbsp;&nbsp;.18th Semptember, 2023</span>
            </div>
            <span className='text-2xl font-bold'>Headline 1</span>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur facere deserunt minima ratione itaque vitae beatae laborum qui eligendi iure atque ipsum obcaecati distinctio officiis architecto impedit labore dicta?
            </p>
            <span className='text-sm'>7 min read &nbsp;</span>
            <a href="#" className='text-sm text-gray-500 hover:text-blue-500'>report</a>
        </div>
    </div>
  )
}

export default articleCard