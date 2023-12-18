  import React, { useState } from 'react'
  import { Chip, Button, useDisclosure, Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter} from '@nextui-org/react'
  import { Icon } from '@iconify/react';
  import axios from 'axios'
  import ServerUrl from '../../constants'
  import { jwtDecode } from 'jwt-decode';
  import Avatar from 'react-avatar';
  import './userTable.css'

  const rows = (props) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading,setIsLoading] = useState(false);

    const color = () => {
      if (props.lawyers.length > 0)
      {
        return "success"
      }
      else return "danger"
    }
    const status = () => {
      if(props.lawyers.length > 0)
      {
        return "accepted"
      }
      else{
        return "pending"
      }

    }
    const handleDelete = async () => {
      setIsLoading(true);
      const token = document.cookie.split("token=")[1];
      const username = jwtDecode(token).id.username;
      const helpId = props.id
      try {
        // Replace 'YOUR_DELETE_ENDPOINT' with the actual endpoint for deleting a row
        const response = await axios.post(`${ServerUrl}/api/client/helpResolved`, {username,helpId}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Check the response status and update UI or handle accordingly
        if (response.status === 200) {
          console.log('Row deleted successfully!');
          // You might want to update the UI or refetch data here
        } else {
          console.error('Failed to delete row');
        }
      } catch (error) {
        console.error('Error deleting row:', error);
      }
      setIsLoading(false)
      location.reload();
    };
      
      // const fullName = props.name;
      // // Splitting the string into an array based on the space character
      // const nameParts = fullName.split(' ');
      // // Extracting the last two parts of the array (first part is 'Adv.')
      // const extractedName = nameParts.slice(1).join(' ');

    return (
      <div className='flex p-6 justify-between'>
          <div className='flex gap-4 justify-center items-center'>
          <div className='flex flex-col'>
              <span className='text-lg font-bold'>{props.category}</span>
              <span className='text-sm font-light'>{props.description}</span>
          </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            {
              (props.lawyers.map((item,index) => (
                <>
                <div className='flex justify-between items-center h-[20px] random overflow-y-scroll text-xs gap-2'>
                      <Avatar name={item.lawyer.name} size="20px" round/>
                    <span>{item.responseByLawyer}</span>
                </div>
                </>
              )))
            }
          </div>
          <div className='flex gap-8 justify-center items-center'>
          <Chip className="capitalize" color={color()} size="md" variant="flat">
            {status()}
          </Chip>
          <Button color='danger' variant='light' size='sm' onClick={onOpen}>
          <Icon icon="mi:delete" fontSize={20} />
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader> Delete Request </ModalHeader>
                  <ModalBody> Are you sure you want to delete the request </ModalBody>
                  <ModalFooter>
                    <Button
                    color='danger'
                    isLoading={isLoading}
                    onClick={handleDelete}
                    onPress={onClose}
                    >
                    {isLoading ? "Deleting" : "Delete"}
                    </Button>
                  </ModalFooter> 
              </>           
            )}
            </ModalContent>
          </Modal>
          </Button>
          </div>
      </div>
    )
  }

  export default rows