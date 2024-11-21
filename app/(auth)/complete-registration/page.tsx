"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import jwt from "jsonwebtoken"
import { apiClient } from '@/lib/apiClient';
import CustomInput from '@/components/CustomInput';
import { Form } from '@/components/ui/form';
import { completeRegistrationSchema } from '@/lib/utils';
import { useRouter } from 'next/router';
import CompleteRegistrationInput from '@/components/CompleteRegistrationInput';
import { Loader2 } from 'lucide-react';


const CompleteRegistration = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const formSchema = completeRegistrationSchema()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        username: "",
        first_name: "",
        last_name: "",
        },
    })

    const onSubmit = async (data: any) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }
    
        // Decodifica el token y verifica el tipo
        const decodedToken = jwt.decode(token);
        if (!decodedToken || typeof decodedToken === 'string') {
          throw new Error('Invalid token format');
        }
    
        // Extrae el googleId del token
        const { googleId } = decodedToken as jwt.JwtPayload & { googleId: string };
        if (!googleId) {
          throw new Error('googleId not found in token');
        }
    
        const response = await apiClient.post('/complete-registration', {
          ...data,
          googleId,
        });
    
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          router.push('/');
        }
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-4">
          <CompleteRegistrationInput control={form.control} name='first_name' label="First Name" placeholder='Enter your first name' />
          <CompleteRegistrationInput control={form.control} name='last_name' label="Last Name" placeholder='Enter your last name' />
          </div>

        <CompleteRegistrationInput control={form.control} name='username' label="Username" placeholder='Enter your username' />
  

        <div className="flex flex-col gap-4">
          <Button type="submit" disabled={isLoading} className="form-btn">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp;
                Loading...
              </>
            ) : "Complete Registration"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CompleteRegistration;
