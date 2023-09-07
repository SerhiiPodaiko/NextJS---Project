import axios, { AxiosInstance } from 'axios'

const processBuild =
    process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.NEXT_DEV_API_URL

const API: AxiosInstance = axios.create({
    baseURL: `${(processBuild || '').replace(/\/$/, '')}/api/v1`,
    timeout: 60000,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
        // "Access-Control-Allow-Origin:": "*"
    }
})

export default API