"use client";

import HeaderBox from "@/components/HeaderBox";
import TransactionsTable from "@/components/TransactionsTable";
import { Button } from "@/components/ui/button";
import { deleteAccount, getAccountById } from "@/lib/actions/accounts.actions";
import { formatAmount } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TransactionHistory = ({ params }: { params: { account_id: string } }) => {
  const [accountData, setAccountData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/sign-in"); // Redirige si no hay token
      return;
    }

    const getAccountData = async () => {
      const account = await getAccountById({
        token,
        accountId: parseInt(params.account_id),
      });
      setAccountData(account || null);
    };

    getAccountData();
  }, [params.account_id, router]);

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const response = await deleteAccount({
      token,
      accountId: parseInt(params.account_id),
    });

    if (response) {
      alert(response.message);
      if (response.code === 200) {
        router.push("/");
      }
    }
  };

  if (accountData === null) return <h1>Loading...</h1>;

  const { account_type, balance, account_id, card_number } = accountData;

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>
      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">{account_type}</h2>
            <p className="text-16 text-white">{account_id}</p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white text-16">
              {card_number}
            </p>
          </div>
          <div className="transactions-account-balance">
            <p className="text-14">Current Balance</p>
            <p className="text-24 text-center font-bold">
              {formatAmount(balance)}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button className="form-btn" onClick={handleDeleteAccount}>
            <p>Eliminar Cuenta</p>
          </Button>
        </div>
        <section className="flex w-full flex-col gap-6">
          <TransactionsTable account_id={parseInt(params.account_id)} />
        </section>
      </div>
    </div>
  );
};

export default TransactionHistory;
