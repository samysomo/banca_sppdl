import { Control, FieldPath } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { makeTransactionFormSchema } from "@/lib/utils";

const transactionFormSchema = makeTransactionFormSchema()

type CustomInputProps = {
    control : Control<z.infer<typeof transactionFormSchema>>, 
    name : FieldPath<z.infer<typeof transactionFormSchema>>,
    label: string, 
    placeholder: string,
    type: string;
}

const TransactionInput = ({control, name, label, placeholder, type}: CustomInputProps) => {
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

export default TransactionInput