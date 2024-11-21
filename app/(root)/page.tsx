"use client";

import CreateAccountModal from "@/components/CreateAccountModal";
import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccounts } from "@/lib/actions/accounts.actions";
import { getUserInfo } from "@/lib/actions/user.actions";
import { useAppStore } from "@/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home = () => {
  const { userInfo, setUserInfo, userAccounts, setUserAccounts } = useAppStore();
  const [totalBalance, setTotalBalance] = useState(0);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verifica que estás en el cliente
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("tokenExpiration");

    if (!token || !expirationTime) {
      router.push("/sign-in");
      return;
    }

    // Verificar si el token ha expirado
    const currentTime = Date.now();
    if (currentTime > parseInt(expirationTime)) {
      console.log("El token ha expirado.");
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      router.push("/sign-in");
      return;
    }

    const fetchUserData = async () => {
      try {
        const userData = await getUserInfo({ token });
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        localStorage.removeItem("token");
        router.push("/sign-in");
      }
    };

    const fetchAccounts = async () => {
      try {
        const accountsData = await getAccounts({ token });

        if (accountsData && accountsData.length > 0) {
          setUserAccounts(accountsData);
          const total = accountsData.reduce(
            (acc: number, account: Account) => acc + Number(account.balance),
            0
          );
          setTotalBalance(total);
        } else {
          setUserAccounts([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
    fetchAccounts();
  }, [setUserInfo, setUserAccounts, router]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  if (userAccounts && userAccounts.length === 0) {
    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={userInfo.first_name}
              subtext="Create an account as soon as you can!"
            />
          </header>
          <div>
            <p>You don&apos;t have any accounts yet, create one to start managing your finances.</p>
          </div>
        </div>
        <RightSidebar
          user={userInfo}
          account={null}
          openModal={setShowCreateAccountModal}
        />
        <CreateAccountModal
          isOpen={showCreateAccountModal}
          setShowCreateAccountModal={setShowCreateAccountModal}
        />
      </section>
    );
  }

  if (userAccounts && userAccounts[0]) {
    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={userInfo.first_name}
              subtext="Access and manage your account and transactions efficiently"
            />
            <TotalBalanceBox
              accounts={userAccounts}
              totalCurrentBalance={totalBalance}
            />
          </header>
          <RecentTransactions accounts={userAccounts} />
        </div>
        <RightSidebar
          user={userInfo}
          account={userAccounts[0]}
          openModal={setShowCreateAccountModal}
        />
        <CreateAccountModal
          isOpen={showCreateAccountModal}
          setShowCreateAccountModal={setShowCreateAccountModal}
        />
      </section>
    );
  }
};

export default Home;
