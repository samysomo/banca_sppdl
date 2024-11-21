"use client"
import React, { useState } from 'react'
import { Form } from './ui/form'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form';
import { makeTransactionFormSchema } from '@/lib/utils';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TransactionInput from './TransactionInput';
import { Loader2 } from 'lucide-react';
import { createTransaction } from '@/lib/actions/transaction.actions';
import SelectProvider from './SelectProvider';
import { proveedoresAgua, proveedoresGas, proveedoresInternet, proveedoresLuz, proveedoresSeguros, proveedoresTelefonia, proveedoresTelevision, proveedoresTiempoAire } from '@/constants';

const TransactionForm = ({type} : {type : string}) => {
    const [isLoading, setIsLoading] = useState(false);
    const formSchema = makeTransactionFormSchema();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            account_id: "",
            transaction_type: "",
            amount: "",
            description: ""
        },
      })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        try {
            console.log("Tried to submit transaction ")
            const token = localStorage.getItem('token');
            console.log(token)
            const transactionData = {
                transaction_type : "withdrawal",
                amount : Number(data.amount),
                account_id : Number(data.account_id),
                description : data.description
            }

            const create = async () => {
                if (!token || !transactionData) return "Campos incompletos"
                try {
                    const request = await createTransaction({token, transactionData})
                    if(request){
                        alert(request)
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
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <SelectProvider 
            providers={type === "Water"
            ? proveedoresAgua
            : type === "Light"
              ? proveedoresLuz
              : type === "Internet"
                ? proveedoresInternet
                : type === "Gas"
                  ? proveedoresGas
                  : type === "Phone"
                    ? proveedoresTelefonia
                    : type === "Television"
                      ? proveedoresTelevision
                      : type === "Insurance"
                        ? proveedoresSeguros
                        : type === "Air time"
                          ? proveedoresTiempoAire
                          : null
                          }
                    />

        <TransactionInput control={form.control} name='account_id' label="Account ID" placeholder='Enter your account ID' type='text' />
        <TransactionInput control={form.control} name='amount' label="Amount" placeholder='Enter transaction amount' type='number' />
        <TransactionInput control={form.control} name='description' label="Description" placeholder='Enter transaction description' type='text' />

        <div className="flex flex-col gap-4">
            <Button type="submit" disabled={isLoading} className="form-btn">
            {isLoading ? (
                <>
                <Loader2 size={20} className="animate-spin" /> &nbsp;
                Loading...
                </>
            ) : "Pay"}
            </Button>
        </div>
        </form>
    </Form>
  )
}

export default TransactionForm