import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {Control, FieldPath} from "react-hook-form"
import { authFormSchema, createAccountFormSchema } from '@/lib/utils'
import { z } from 'zod'

const accountFormSchema = createAccountFormSchema()

type CustomInputProps = {
    control : Control<z.infer<typeof accountFormSchema>>, 
    name : FieldPath<z.infer<typeof accountFormSchema>>,
    label: string, 
    placeholder: string,
    type: string;
}

const CreateAccountInput = ({control, name, label, placeholder, type}: CustomInputProps) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field } : any) => (
            <div className='form-item'>
            <FormLabel className="form-label">
                {label}
            </FormLabel>
            <div className='flex w-full flex-col'>
                <FormControl>
                <Input 
                    placeholder={placeholder}
                    className='input-class' 
                    type={type}
                    {...field}
                />
                </FormControl>
                <FormMessage
                className='form-message mt-2'
                />
            </div>
            </div>
        )}
    />
  )
}

export default CreateAccountInput