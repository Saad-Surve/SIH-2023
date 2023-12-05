import React from 'react'
import Avatar from 'react-avatar'
import { Chip, Button } from '@nextui-org/react'
import { Icon } from '@iconify/react';

const rows = (props) => {
    
    const fullName = props.name;
    // Splitting the string into an array based on the space character
    const nameParts = fullName.split(' ');
    // Extracting the last two parts of the array (first part is 'Adv.')
    const extractedName = nameParts.slice(1).join(' ');

  return (
    <div className='flex p-6 justify-between'>
        <div className='flex gap-4 justify-center items-center'>
        <Avatar name={extractedName} size='35px' round/>
        <div className='flex flex-col'>
            <span className='text-lg font-bold'>{props.name}</span>
            <span className='text-sm font-light'>{props.case}</span>
        </div>
        </div>
        <div className='flex gap-8 justify-center items-center'>
        <Chip className="capitalize" color={props.color} size="md" variant="flat">
           {props.status}
        </Chip>
        <Button color='danger' variant='light' size='sm'>
        <Icon icon="mi:delete" fontSize={20} />
        </Button>
        </div>
    </div>
  )
}

export default rows