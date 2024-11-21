"use client"
import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { useAppStore } from '@/store'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Transfer = () => {
  const {userAccounts} = useAppStore()
  const router = useRouter()
  useEffect(() => {
    if (!userAccounts) {
      router.push("/"); // Redirige si no hay cuentas
    }
  }, [userAccounts, router]);

  if (!userAccounts) {
    return null; // Muestra nada mientras redirige
  }
  return (
    <section className='payment-transfer'>
      <HeaderBox
        title='Payment Transfer'
        subtext='Please provide any specific details or notes related to the payment transfer'
      />
      <section className='size-full pt-5'>
        <PaymentTransferForm
          accounts={userAccounts!}
        />
      </section>
    </section>
  )
}

export default Transfer