"use server";

import { apiClient } from "../apiClient";

export const createTransfer = async ({token, transactionData}: CreateTransfer) => {
  try {
    const transaction : any = await apiClient.post(
      "/movements/transfers",
       transactionData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    );
    if (transaction.status === 200) {
      return transaction.data.message
    } else {
       return "Error al crear la cuenta"
    }
  } catch (error) {
    console.log(error);
  }
}

export const getTransactionsByAccountId = async ({account_id, token}: getTransactionsByBankIdProps) => {
  try {
    const transactions : any = await apiClient.get(
      `/movements/all/${account_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    );
    if (transactions.status === 200) {
      return transactions.data.message
    } else {
       return "Error al obtener las transacciones"
    }
  } catch (error) {
    console.log(error);
  }
}

export const createTransaction = async ({token, transactionData}: CreateTransactionProps) => {
  try {
    const transaction : any = await apiClient.post(
      "/movements/transactions",
       transactionData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    );
    if (transaction.status === 200) {
      return transaction.data.message
    } else {
       return "Error al hacer la transferencia"
    }
  } catch (error) {
    console.log(error);
  }
}