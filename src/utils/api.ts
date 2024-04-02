import axios from "axios";

const API_URL = import.meta.env.VITE_API_HOST;

export const API = axios.create({
  baseURL: API_URL
});
