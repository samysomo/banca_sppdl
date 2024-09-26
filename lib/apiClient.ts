import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://18.190.3.213:3000"
})