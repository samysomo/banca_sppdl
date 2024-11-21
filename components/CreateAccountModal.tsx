"use client"
import { createAccountFormSchema } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import z from "zod"
import { Form } from './ui/form';
import CustomInput from './CustomInput';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import CreateAccountInput from './CreateAccountInput';
import Link from 'next/link';
import Image from 'next/image';
import { apiClient } from '@/lib/apiClient';
import { useAppStore } from '@/store';
import { createAccount } from '@/lib/actions/accounts.actions';

type CreateAccountModalProps = {
    isOpen: boolean;
    setShowCreateAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateAccountModal = ({isOpen, setShowCreateAccountModal} : CreateAccountModalProps) => {
    if(!isOpen) return null
    const [isLoading, setIsLoading] = useState(false);
    const formSchema = createAccountFormSchema();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            account_type: "",
            balance: 0
        },
      })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        try {
            console.log("Tried to submit")
            const token = localStorage.getItem('token');
            console.log(token)
            const accountData = {
                account_type : data.account_type,
                balance : Number(data.balance)
              }
    
              const create = async () => {
                if (!token || !accountData) return "Campos incompletos"
                try {
                    const request = await createAccount({token, accountData})
                    if(request){
                        alert(request)
                        setShowCreateAccountModal(false)
                    } else {
                        alert("No jalo")
                    }
                } catch (error) {
                    console.log(error)
                }
              }
            create()
            
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
  return (
    <div className='fixed inset-0 bg-black-2 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] lg:w-[800px] flex flex-col'>
            <button className='text-white text-xl place-self-end' onClick={() => setShowCreateAccountModal(false)}>
                X
            </button>
            <div className='bg-white p-10 rounded-md'>
                <header className='flex flex-col gap-5 md:gap-8 mb-10'>
                    <Link href="/" className="cursor-pointer flex items-center gap-1">
                        <Image 
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">SPPDL</h1>
                    </Link>

                    <div className="flex flex-col gap-1 md:gap-3">
                        <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                            Create Account
                            <p className="text-16 font-normal text-gray-600">
                                Please enter your account details
                            </p>  
                        </h1>
                    </div>
                </header>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    <CreateAccountInput control={form.control} name='account_type' label="Account Name" placeholder='Enter account name' type='text' />
                    <CreateAccountInput control={form.control} name='balance' label="Balance" placeholder='Enter account balance' type='number' />

                    <div className="flex flex-col gap-4">
                        <Button type="submit" disabled={isLoading} className="form-btn">
                        {isLoading ? (
                            <>
                            <Loader2 size={20} className="animate-spin" /> &nbsp;
                            Loading...
                            </>
                        ) : "Create"}
                        </Button>
                    </div>
                    </form>
                </Form>
            </div>
            
        </div>
    </div>
  )
}

export default CreateAccountModal