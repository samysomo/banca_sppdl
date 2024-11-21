'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getUserInfo} from '@/lib/actions/user.actions';
import { apiClient } from '@/lib/apiClient';
import jwt from "jsonwebtoken"
import { FaGoogle } from 'react-icons/fa';

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        password: ''
      },
    })
   
    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      setIsLoading(true);

      try {
        
        if(type === 'sign-up') {
          const userData = {
            first_name: data.first_name!,
            last_name: data.last_name!,
            username: data.username!,
            email: data.email,
            password: data.password
          }

          const response = await apiClient.post(
            "/users/signup", userData
          );
          console.log(response)

          if(response.data.code === 201){
            router.push("/sign-in")
          }
        }

        if(type === 'sign-in') {
          const userData = {
            username: data.username!,
            password: data.password
          }
          

          const response = await apiClient.post(
            "/users/login", userData
          );
          console.log(response)
          if(response.data.code === 200){
            const token = response.data.message;
            if (token) {
              // Decodificar el token para extraer la fecha de expiración
              const decodedToken: any = jwt.decode(token);
              const expirationTime = decodedToken.exp * 1000; // Convertir a milisegundos
        
              // Guardar token y fecha de expiración en localStorage
              localStorage.setItem("token", token);
              localStorage.setItem("tokenExpiration", expirationTime.toString());
        
              router.push("/");
            }  
          } else {
            console.log("Usuario no encontrado")
          }

        }
        
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

  return (
    <section className="auth-form">
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
              {type === 'sign-in'
                  ? 'Sign In'
                  : 'Sign Up'
              }
              <p className="text-16 font-normal text-gray-600">
                Please enter your details
              </p>  
            </h1>
          </div>
      </header>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='first_name' label="First Name" placeholder='Enter your first name' />
                    <CustomInput control={form.control} name='last_name' label="Last Name" placeholder='Enter your last name' />
                  </div>
                  <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
                 
                </>
              )}

              <CustomInput control={form.control} name='username' label="Username" placeholder='Enter your username' />
              <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in' 
                    ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
            
          </footer>
          <Button
               onClick={async () => {
                const googleAuthUrl = `https://bancasppdl.click/googlelogin/auth/google`;
                window.location.href = googleAuthUrl;
                }
               }
              className="form-btn"
            >
              <p>Sign In with Google</p>
              <FaGoogle className='5xl ml-5'></FaGoogle>
            </Button>
    </section>
  )
}

export default AuthForm