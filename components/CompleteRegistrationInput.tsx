import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {Control, FieldPath} from "react-hook-form"
import { authFormSchema, completeRegistrationSchema, createAccountFormSchema } from '@/lib/utils'
import { z } from 'zod'

const formSchema = completeRegistrationSchema()

type CompleteRegistrationInputProps = {
    control : Control<z.infer<typeof formSchema>>, 
    name : FieldPath<z.infer<typeof formSchema>>,
    label: string, 
    placeholder: string
}

const CompleteRegistrationInput = ({control, name, label, placeholder}: CompleteRegistrationInputProps) => {
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
                    type={"text"}
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

export default CompleteRegistrationInput