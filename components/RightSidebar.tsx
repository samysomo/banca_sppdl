import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({user, transactions, account, openModal}: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner'/>
                <div className='profile'>
                    <div className='profile-img'>
                        <span className='text-5xl font-bold text-blue-500'>{user.first_name[0]}</span>
                    </div>
                    <div className='profile-details'>
                        <h1 className='profile-name'>
                            {user.first_name} 
                        </h1>
                        <p className='profile-email'>
                            {user.email}
                        </p>
                    </div>
                </div>
        </section>
        <section className='banks'>
            <div className='flex w-full justify-between'>
                <h2 className='header-2'>My Accounts</h2>
                <button className='flex gap-2' onClick={() => openModal(true)}>
                    <Image
                        src="/icons/plus.svg"
                        width={20}
                        height={20}
                        alt='plus'
                    />
                    <h2 className='text-14 font-semibold text-gray-600'>
                        Add Bank
                    </h2>
                </button>
            </div>
            {account && (
                <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                    <div className='relative z-10'>
                        <BankCard
                            key={account.account_id}
                            account={account}
                            userName={`${user.first_name} ${user.last_name}`}
                            showBalance={false}
                        />
                    </div>
                </div>
            )}
        </section>
    </aside>
  )
}

export default RightSidebar