import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { testUsers } from "@/constants";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={testUsers[0]}/>
        
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
                user={testUsers[0]}
              />
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
