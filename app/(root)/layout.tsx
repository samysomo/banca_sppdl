"use client"
import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { testUsers } from "@/constants";
import { useAppStore } from "@/store";
import Image from "next/image";
import { redirect } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const{userInfo} = useAppStore();
  
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={userInfo}/>
        
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image
              src="/icons/logo.svg" 
              width={30} 
              height={30} 
              alt="logo"
            />
            <div>
              <MobileNavbar
                user={userInfo}
              />
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
