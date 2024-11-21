import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import {FaBeer, FaBurn, FaGasPump, FaGavel, FaLock, FaPhone, FaTransgender, FaWater} from "react-icons/fa"
import { LuDroplet, LuDroplets, LuLightbulb, LuLock, LuMessageCircle, LuPhone, LuTv, LuTv2, LuWifi } from "react-icons/lu"
import { BiGasPump } from "react-icons/bi"
import TransactionForm from './TransactionForm'

const ServiceCard = ({tittle} : {tittle: string}) => {
  return (
    <Dialog>
      <DialogTrigger className='w-[200px] h-[150px] p-5 rounded-md bg-bank-gradient text-white font-bold hover:scale-110 transition-all' >
        <div className='flex flex-col justify-center items-center gap-5'>
          <h2 className='text-xl'>{tittle}</h2>
          {tittle === "Water"
            ? <LuDroplets className='text-5xl'/>
            : tittle === "Light"
              ? <LuLightbulb className='text-5xl'/>
              : tittle === "Internet"
                ? <LuWifi className='text-5xl'/>
                : tittle === "Gas"
                  ? <FaBurn className='text-5xl'/>
                  : tittle === "Phone"
                    ? <LuPhone className='text-5xl'/>
                    : tittle === "Television"
                      ? <LuTv2 className='text-5xl'/>
                      : tittle === "Insurance"
                        ? <LuLock className='text-5xl'/>
                        : tittle === "Air time"
                          ? <LuMessageCircle className='text-5xl'/>
                          : tittle === ""
          }
          
        </div>
      </DialogTrigger>
      <DialogContent className='bg-white'>
        <DialogHeader>
          <DialogTitle>{tittle} Service Payment</DialogTitle>
          <DialogDescription>
            Enter transaction details.
          </DialogDescription>
        </DialogHeader>
        <TransactionForm type={tittle}/>
      </DialogContent>
    </Dialog>


  )
}

export default ServiceCard