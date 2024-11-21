"use client";

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { apiClient } from '@/lib/apiClient';
import { Form } from '@/components/ui/form';
import { completeRegistrationSchema } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import CompleteRegistrationInput from '@/components/CompleteRegistrationInput';
import { Loader2 } from 'lucide-react';

const CompleteRegistration = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [googleId, setGoogleId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const formSchema = completeRegistrationSchema();

  useEffect(() => {
    // Solo se ejecuta en el cliente
    const params = new URLSearchParams(window.location.search);
    setGoogleId(params.get('googleId'));
    setEmail(params.get('email'));
    console.log(googleId , "& ", email)
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      first_name: '',
      last_name: '',
      email: email || '',
    },
  });

  if (!googleId || !email) {
    return <div>Missing parameters. Please try again.</div>;
  }

  const onSubmit = async (data: any) => {
    try {
      console.log("Tried to submit google")
      setIsLoading(true);
      const response = await apiClient.post('/complete-registration', {
        ...data,
        googleId,
      });
      console.log(response.data)
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-4">
          <CompleteRegistrationInput
            control={form.control}
            name="first_name"
            label="First Name"
            placeholder="Enter your first name"
          />
          <CompleteRegistrationInput
            control={form.control}
            name="last_name"
            label="Last Name"
            placeholder="Enter your last name"
          />
        </div>
        <CompleteRegistrationInput
          control={form.control}
          name="username"
          label="Username"
          placeholder="Enter your username"
        />
        <div className="flex flex-col gap-4">
          <Button type="submit" disabled={isLoading} className="form-btn">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
              </>
            ) : (
              'Complete Registration'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CompleteRegistration;
