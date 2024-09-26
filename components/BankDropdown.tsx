"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { formUrlQuery, formatAmount } from "@/lib/utils";
import { testAccounts } from "@/constants";

export const BankDropdown = ({
  accounts = [],
  setValue,
  otherStyles,
}: BankDropdownProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(accounts[0]);

  const handleAccountChange = (id: string) => {
    console.log(id)
    const account = accounts.find(a => a.account_type.toString() === id); 
    console.log(account)
    if(account) setSelected(account);
    if (setValue) {
        setValue("senderBank", id);
      }
    console.log(selected)
  }

  return (
    <Select
      defaultValue={selected.account_id.toString()}
      onValueChange={(value) => handleAccountChange(value)}
    >
      <SelectTrigger
        className={`flex w-full bg-white gap-3 md:w-[300px] ${otherStyles}`}
      >
        <Image
          src="icons/credit-card.svg"
          width={20}
          height={20}
          alt="account"
        />
        <p className="line-clamp-1 w-full text-left">{selected.account_type}</p>
      </SelectTrigger>
      <SelectContent
        className={`w-full bg-white md:w-[300px] ${otherStyles}`}
        align="end"
      >
        <SelectGroup>
          <SelectLabel className="py-2 font-normal text-gray-500">
            Select a bank to display
          </SelectLabel>
          {accounts.map((account: Account) => (
            <SelectItem
              key={account.account_id}
              value={account.account_type}
              className="cursor-pointer border-t"
            >
              <div className="flex flex-col ">
                <p className="text-16 font-medium">{account.account_type}</p>
                <p className="text-14 font-medium text-blue-600">
                  {formatAmount(account.balance)}
                </p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};