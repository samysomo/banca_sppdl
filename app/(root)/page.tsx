"use client"
import CreateAccountModal from '@/components/CreateAccountModal'
import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { testAccounts, testTransactions, testUsers } from '@/constants'
import { getUserInfo } from '@/lib/actions/user.actions'
import { useAppStore } from '@/store'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const {userInfo, setUserInfo} = useAppStore()
    const [accounts, setAccounts] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
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
            setUserInfo(userData); // Asumiendo que la respuesta de la API contiene un campo `user`
          } catch (error) {
            console.error('Error fetching user data:', error);
            localStorage.removeItem('token');
            router.push('/sign-in');
          }
        };
        fetchUserData();
      },[]);
  
    if (!userInfo) {
        
      return <div>Loading...</div>;
    }
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={userInfo.first_name}
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
            user={userInfo}
            transactions={testTransactions}
            account={testAccounts[0]}
            openModal={setShowCreateAccountModal}
        />
        <CreateAccountModal
            isOpen={showCreateAccountModal}
            setShowCreateAccountModal={setShowCreateAccountModal}
        />
    </section>
  )
}

export default Home