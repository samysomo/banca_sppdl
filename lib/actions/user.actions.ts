"use server"

import { cookies } from "next/headers"
import { encryptId, extractCustomerIdFromUrl, parseStringify } from "../utils"
import { revalidatePath } from "next/cache"
import { string } from "zod"
import axios from 'axios';

const {
  API_URL : API_URL
} = process.env;

export const getUserInfo = async({userId}: getUserInfoProps) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const signIn = async ({email, password} : signInProps) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        password,
        email,
      });
  
      // Manejar la respuesta según lo que devuelva la API
      if (response.status === 201) {
        console.log('Usuario registrado correctamente:', response.data);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Manejar errores específicos de axios
        console.error('Error en la solicitud de Axios:', error.response?.data || error.message);
      } else {
        // Manejar otros errores
        console.error('Error', error);
      }
      throw error;
    }
}

export const signUp = async ({...userData}: SignUpParams) => {
  const {username, password, email, first_name, last_name} = userData
  try {
    const response = await axios.post(`${API_URL}/signin`, {
      username,
      password,
      email,
      first_name,
      last_name,
    });

    // Manejar la respuesta según lo que devuelva la API
    if (response.status === 201) {
      console.log('Usuario registrado correctamente:', response.data);
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Manejar errores específicos de axios
      console.error('Error en la solicitud de Axios:', error.response?.data || error.message);
    } else {
      // Manejar otros errores
      console.error('Error', error);
    }
    throw error;
  }
}

export async function getLoggedInUser() {
    try {
    
    } catch (error) {
      return null;
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
