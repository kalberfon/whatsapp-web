import axios from "axios"

const defaultHeaders = {
    'Content-Type': 'application/json',
  }
const api = axios.create({
    headers: defaultHeaders,
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
});

export default api