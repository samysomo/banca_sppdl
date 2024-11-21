"use client"
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
import { getTransactionsByAccountId } from "@/lib/actions/transaction.actions"
import { cn, formatAmount, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"
import { notFound, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { string } from "zod"
  


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

const TransactionsTable = ({account_id} : TransactionTableProps) => {
    const [movements, setMovements] = useState<any>(null)
    const router = useRouter()
    const token = localStorage.getItem("token")

    useEffect(() => {
      const getMovements = async() => {
        if (!token) {
            router.push("/sign-in")
            return
          };
        const transactions = await getTransactionsByAccountId({account_id, token})
        if (transactions) {
            setMovements(transactions)
        } else {
            console.log("No hay movimientos")
        }
      }
      getMovements()
    }, [])
    
    if (!movements)return null
    if((typeof movements === "string") || !movements) return <div className="text-center mt-10">No hay movimientos</div>
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
            {movements.map((transaction : Transaction | Transfer) => {
                const isTransaction = 'transaction_id' in transaction;
                const amount = formatAmount(transaction.amount)
                const description = isTransaction
                ? transaction.description
                : transaction.description;
                const date = isTransaction
                ? transaction.transaction_date
                : transaction.transfer_date;
                const type = isTransaction
                ? transaction.transaction_type
                : transaction.from_account_id  === account_id
                    ? "transferFrom"
                    : "transferTo"
                return (
                    <TableRow key={isTransaction ? transaction.transaction_id : transaction.transfer_id}>
                        <TableCell>
                            <div>
                                <h1>
                                    {description}
                                </h1>
                            </div>
                        </TableCell>
                        <TableCell>
                            { type === "transferTo"
                                ? amount
                                :  `-${amount}`
                            }
                        </TableCell>
                        <TableCell>
                            {date}
                        </TableCell>
                        <TableCell>
                            <CategoryBadge
                                type={type}
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