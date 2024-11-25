"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({user, type = "desktop"} : FooterProps) => {

    const router = useRouter()
    const handleLogOut = async () => {
        localStorage.removeItem("token")
        localStorage.removeItem("tokenExpiration")
        router.push("/sign-in")
    }

  return (
    <footer className='footer'>
        <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.first_name[0]}
            </p>
        </div>
        <div className={type === "mobile" ? "footer_email-mobile" : "footer_email"}>
            <h1 className='text-14 truncate text-gray-700 font-semibold'>
                {user?.first_name}
            </h1>
            <p className='text-14 truncate font-normal text-gray-600'>
                {user?.email}
            </p>
        </div>
        <div className='footer_image' onClick={handleLogOut}>
            <Image
                src="icons/logout.svg"
                alt='Profile image'
                fill
            />
        </div>
    </footer>
  )
}

export default Footer