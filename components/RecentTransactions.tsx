import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import TransactionsTable from './TransactionsTable'

const RecentTransactions = ({
    transactions = [],
}: RecentTransactionsProps) => {
  return (
    <section className='recent-transactions'>
      <header className='flex items-center justify-between'>
        <h2 className='recent-transactions-label'>
          Recent Transactions
        </h2>
      </header>
        <TransactionsTable
          transactions={transactions}
        />
    </section>
  )
}

export default RecentTransactions