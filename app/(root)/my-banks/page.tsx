"use client"
import BankCard from '@/components/BankCard';
import CreateAccountModal from '@/components/CreateAccountModal';
import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/accounts.actions';
import { useAppStore } from '@/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const MyBanks = () => {
  const router = useRouter()
  const {userInfo, userAccounts} = useAppStore()
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  
  if(!userAccounts) router.push("/")
  if(!userAccounts) return null
  
  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox
          title='My Bank Accounts'
          subtext='Effortlessly manage your banking activities.'
        />
        <div className='space-y-4'>
          <h2 className='header-2'>
            Your Accounts
          </h2>
          <button className='flex gap-2' onClick={() => setShowCreateAccountModal(true)}>
              <Image
                  src="/icons/plus.svg"
                  width={20}
                  height={20}
                  alt='plus'
              />
              <h2 className='text-14 font-semibold text-gray-600'>
                  Add Account
              </h2>
          </button>
          <div className='flex flex-wrap gap-6'>
            {userAccounts.map((a: Account) => (
              <BankCard
                key={a.account_id}
                account={a}
                userName={`${userInfo?.first_name } ${userInfo?.last_name}` || "Usuario"}
              />
            ))}
            { userAccounts.length === 0 && (
              <h2 className='w-full text-center'>You don&apos;t have any accounts yet, create one!</h2>
            )
            }
          </div>
        </div>
      </div>
      <CreateAccountModal
          isOpen={showCreateAccountModal}
          setShowCreateAccountModal={setShowCreateAccountModal}
      />
    </section>
  )
}

export default MyBanks