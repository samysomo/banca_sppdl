"use client"
import Image from "next/image"
import { 
    Sheet, 
    SheetClose, 
    SheetContent, 
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger 
} from "./ui/sheet"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Footer from "./Footer"
import { useRouter } from "next/navigation"
import { useAppStore } from "@/store"

const MobileNavbar = ({user} : MobileNavProps) => {
    const pathname = usePathname();
    
  return (
    <section className="w-full max-w-[264px]">
        <Sheet>
            <SheetTrigger>
                <Image
                    src="/icons/hamburger.svg"
                    alt="menu"
                    width={30}
                    height={30}
                />
            </SheetTrigger>
                <SheetContent className="border-none bg-white">
                    <SheetHeader>
                    <Link href={"/"} className='flex cursor-pointer items-center gap-1 px-4'>
                        <Image
                            src="/icons/logo.svg"
                            width={34}
                            height={34}
                            alt='Horizon Logo'
                        />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                                    return(
                                    <SheetClose asChild key={link.route}>
                                        <Link href={link.route} key={link.label} className={cn("mobilenav-sheet_close w-full", {"bg-bank-gradient" : isActive})}>
                                            <Image
                                                src={link.imgURL}
                                                alt={link.label}
                                                height={20}
                                                width={20}
                                                className={cn({
                                                    "brightness-[3] invert-0" : isActive
                                                })}
                                            />
                                        <p className={cn("text-16 font-semibold text-black-2",{
                                            "!text-white" : isActive
                                        })}>
                                            {link.label}
                                        </p>
                                    </Link>
                                    </SheetClose>
                                )})

                                }
                            </nav>
                        </SheetClose>
                        <Footer user={user} type="mobile"/>
                    </div>
                    
                    </SheetHeader>
            </SheetContent>
        </Sheet>
    </section>
    

  )
}

export default MobileNavbar