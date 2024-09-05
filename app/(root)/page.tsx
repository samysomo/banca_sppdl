
import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { testAccounts, testTransactions, testUsers } from '@/constants'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React, { useState } from 'react'

const Home = () => {
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={testUsers[0].first_name}
                    subtext="Access and manage your account and transactions efficiently"
                />
                <TotalBalanceBox
                    accounts={testAccounts}
                    totalCurrentBalance={2000}
                />
            </header>
            <RecentTransactions 
                transactions={testTransactions}
            />
        </div>
        <RightSidebar
            user={testUsers[0]}
            transactions={testTransactions}
            account={testAccounts[0]}
        />
    </section>
  )
}

export default Home