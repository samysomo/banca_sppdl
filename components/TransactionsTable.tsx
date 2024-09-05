import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"
  

const TransactionsTable = ({transactions} : TransactionTableProps) => {
  return (
    <Table>
        <TableHeader className="bg-[#f9fafb]">
            <TableRow>
                <TableHead className="px-2">Transaction</TableHead>
                <TableHead className="px-2">Amount</TableHead>
                <TableHead className="px-2">Date</TableHead>
                <TableHead className="px-2">Type</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {transactions.map((transaction : Transaction) => {
                const amount = formatAmount(transaction.amount)
                return (
                    <TableRow key={transaction.transaction_id}>
                        <TableCell>
                            <div>
                                <h1>
                                    {transaction.descripcion}
                                </h1>
                            </div>
                        </TableCell>
                        <TableCell>
                            {amount}
                        </TableCell>
                        <TableCell>
                            {transaction.transaction_date}
                        </TableCell>
                        <TableCell>
                            {transaction.transaction_type}
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    </Table>

  )
}

export default TransactionsTable