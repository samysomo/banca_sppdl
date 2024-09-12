import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { testAccounts } from '@/constants';
import React from 'react'

const MyBanks = async () => {

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
          <div className='flex flex-wrap gap-6'>
            {testAccounts.map((a: Account) => (
              <BankCard
                key={a.account_id}
                account={a}
                userName="test account"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks