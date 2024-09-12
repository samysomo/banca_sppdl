import HeaderBox from '@/components/HeaderBox'
import TransactionsTable from '@/components/TransactionsTable';
import { testAccounts, testTransactions } from '@/constants';
import { formatAmount } from '@/lib/utils';

const TransactionHistory = async() => {

  return (
    <div className='transactions'>
      <div className='transactions-header'>
        <HeaderBox
          title='Transaction History'
          subtext='See your bank details and transactions.'
        />
      </div>
      <div className='space-y-6'>
        <div className='transactions-account'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-18 font-bold text-white'>{"Test Account"}</h2>
            <p className='text-14 text-blue-25'>{"Account Official Name"}</p>
            <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                        ●●●● ●●●● ●●●● <span className='text-16'>1234</span>
            </p>
          </div>
          <div className='transactions-account-balance'>
            <p className='text-14'>Current Balance</p>
            <p className='text-24 text-center font-bold'>
              {formatAmount(testAccounts[0].balance)}
            </p>
          </div>
        </div>
        <section className='flex w-full flex-col gap-6'>
          <TransactionsTable
            transactions={testTransactions}
          />
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory