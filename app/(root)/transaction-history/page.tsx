"use client"
import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions';
import TransactionsTable from '@/components/TransactionsTable';
import { getAccountById } from '@/lib/actions/accounts.actions';
import { formatAmount } from '@/lib/utils';
import { useAppStore } from '@/store';
import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const TransactionHistory = () => {
  const router = useRouter()
  const {userAccounts} = useAppStore()
  if (!userAccounts) {
    router.push("/")
    return null
  }

  return (
    <div className='transactions'>
      <div className='transactions-header'>
        <HeaderBox
          title='Transaction History'
          subtext='See your bank details and transactions.'
        />
      </div>
      <RecentTransactions
        accounts={userAccounts}
      />
    </div>
  )
}

export default TransactionHistory