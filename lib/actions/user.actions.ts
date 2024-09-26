"use server"

import { cookies } from "next/headers"
import { encryptId, extractCustomerIdFromUrl, parseStringify } from "../utils"
import { revalidatePath } from "next/cache"
import { string } from "zod"
import axios from 'axios';
import { apiClient } from "../apiClient"

const {
  API_URL : API_URL
} = process.env;

export const getUserInfo = async({token}: getUserInfoProps) => {
    try {
        const getUser : any = await apiClient.get(
          "/updateUsers/user", {
            headers: {
              Authorization: `Bearer ${token}`
            },
            
          }
        );
        if (getUser.data) {
          console.log(getUser)
          return getUser.data.message
        }

    } catch (error) {
        console.log(error)
    }
}



export const logoutAccount = async () => {
    try {
       
    } catch (error) {
        return null
    }
}


export const createBankAccount = async ({
    userId,
    bankId,
    accountId,
    accessToken,
    fundingSourceUrl,
    shareableId,
  }: createBankAccountProps) => {
    try {
  
    } catch (error) {
      console.log(error);
    }
  }


export const getBanks = async ({userId} : getBanksProps) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const getBank = async ({documentId} : getBankProps) => {
    try {
       
    } catch (error) {
        console.log(error)
    }
}
