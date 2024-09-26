import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

type CreateAccountModalProps = {
    isOpen: boolean;
    setShowCreateAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateAccountModal = ({isOpen, setShowCreateAccountModal} : CreateAccountModalProps) => {
    if(!isOpen) return null

    // const formSchema = createAccountFormSchema();

    // const form = useForm<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //       username: "",
    //       password: ''
    //     },
    //   })
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] lg:w-[800px] flex flex-col'>
            <button className='text-white text-xl place-self-end' onClick={() => setShowCreateAccountModal(false)}>
                X
            </button>
            <div className='bg-white p-2 rounded-full'>
                Modal
            </div>
            
        </div>
    </div>
  )
}

export default CreateAccountModal