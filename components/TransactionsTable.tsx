import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { transactionTypeStyles } from "@/constants"
import { cn, formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"
  


const CategoryBadge = ({type}: CategoryBadgeProps) => {
    const {
        borderColor,
        backgroundColor,
        textColor,
        chipBackgroundColor
    } = transactionTypeStyles[type as keyof typeof transactionTypeStyles] || transactionTypeStyles.default
    return (
        <div className={cn("category-badge", borderColor, chipBackgroundColor)}>
            <div className={cn("size-2 rounded-full", backgroundColor)}></div>
            <p className={cn("text-[12px] font-medium", textColor)}>{type}</p>
        </div>
    )
}

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
                            {transaction.transaction_type === "deposit"
                                ? amount
                                :  `-${amount}`
                            }
                        </TableCell>
                        <TableCell>
                            {transaction.transaction_date}
                        </TableCell>
                        <TableCell>
                            <CategoryBadge
                                type={transaction.transaction_type}
                            />
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    </Table>

  )
}

export default TransactionsTable