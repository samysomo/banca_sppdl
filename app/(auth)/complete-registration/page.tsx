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
import Link from 'next/link';
import Image from 'next/image';

const CompleteRegistration = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [googleId, setGoogleId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const formSchema = completeRegistrationSchema();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGoogleId(params.get('googleId'));
    setEmail(params.get('email'));
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      first_name: '',
      last_name: '',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const registration = {
        googleId,
        email,
        ...data
      }
      console.log(registration)
      const response = await apiClient.post('/googlelogin/complete-registration', registration);
      console.log(response.data);
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

  if (!googleId || !email) {
    return <div>Loading parameters...</div>;
  }

  return (
    <section className='flex-center size-full max-sm:px-6'>
    <div className="auth-form">
      <header className='flex flex-col gap-5 md:gap-8'>
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
              Complete Registration
              <p className="text-16 font-normal text-gray-600">
                Please enter your details
              </p>  
            </h1>
          </div>
      </header>
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
    </div>
    </section>
  );
};


export default CompleteRegistration;
