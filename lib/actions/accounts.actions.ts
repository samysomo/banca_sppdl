"use server"

import { redirect } from "next/dist/server/api-utils";
import { apiClient } from "../apiClient";

export const createAccount = async({token, accountData}: createAccountProps) => {
    try {
        const account : any = await apiClient.post(
          "/accounts/create",
           accountData,
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
          }
        );
        if (account.status === 201) {
          return account.data.message
        } else {
           return "Error al crear la cuenta"
        }

    } catch (error) {
        console.log(error)
    }
}

export const getAccountById = async({token, accountId} : {token: string, accountId: number}) => {
  try {
    const response : any = await apiClient.get(
      `/accounts/select/${accountId}`, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }, 
      }
    )
    console.log(response.data)
    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log(error)
  }
}


export const getAccounts = async({token} : {token: string}) => {
  try {
    const response : any = await apiClient.get(
      "/accounts/all", 
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    )
    if (response.status === 200) {
      console.log(response)
      return response.data.message  
    } 
  } catch (error : any) {
    if (error.response.data === 404){
      return error.response.data.message
    }
  }
}

export const deleteAccount = async({token, accountId} : {token: string, accountId: number}) => {
  try {
    const response : any = await apiClient.delete(
      `/accounts/delete/${accountId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    )
    if (response) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
