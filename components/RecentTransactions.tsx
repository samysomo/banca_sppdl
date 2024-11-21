import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import TransactionsTable from './TransactionsTable'
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'

const RecentTransactions = ({
    accounts = [],
}: RecentTransactionsProps) => {
  if ((!accounts) || typeof accounts === "string") return <div>Aun no tienes ninguna cuenta</div>
  return (
    <section className='recent-transactions'>
      <header className='flex items-center justify-between'>
        <h2 className='recent-transactions-label'>
          Recent Transactions
        </h2>
      </header>
      <Tabs className="w-full" defaultValue={accounts[0].account_id.toString()}>
        <TabsList className='recent-transactions-tablist'>
          {accounts.map((account : Account) => (
            <TabsTrigger key={account.account_id} value={account.account_id.toString()}>
              <BankTabItem
                key={account.account_id}
                account_id={account.account_id}
                account={account}
              />
            </TabsTrigger>
          ))}
        </TabsList>
        {accounts.map((account : Account) => (
          <TabsContent
            key={account.account_id} 
            value={account.account_id.toString()}
            className='space-y-4'
          >
            <BankInfo
              account={account}
              account_id={account.account_id.toString()}
              type="full"
            />
            <TransactionsTable
              account_id={account.account_id}
            />
          </TabsContent>
        ))}
        
      </Tabs>
    </section>
  )
}

export default RecentTransactions