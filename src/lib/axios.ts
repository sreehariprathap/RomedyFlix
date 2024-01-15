import Axios, { AxiosRequestConfig } from "axios"
import { API_URL, TMDB_BEARER_TOKEN } from "../config"
import storage from "../utils/storage"
import { useNotificationStore } from "../stores/notifications"

function authRequestInterceptor(config: AxiosRequestConfig | any) {
  const token = storage.getToken()
  if (config && config.headers) {
    if (token) {
      config.headers.authorization = `${token}`
    }
    config.headers.authorization =`Bearer ${TMDB_BEARER_TOKEN}` 
    config.headers.Accept = "application/json"
    config.params = {
      ...config.params
    }
    return config
  }
}

export const axios = Axios.create({
  baseURL: API_URL,
})

axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use(
  (response: any) => {
    return response.data
  },
  (error: any) => {
    const message = error.response?.data?.message || error.message
    useNotificationStore.getState().addNotification({
      type: "error",
      title: "Error",
      message,
    })

    return Promise.reject(error)
  }
)
