import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { SMART } from '@smart/admin/types/constant.ts'
import { storage } from '@smart/utils'
import axios from 'axios'

const smart = storage.get(SMART.APP_CONF)

const instance: AxiosInstance = axios.create({
  baseURL: smart?.service?.baseURL || '/',
  timeout: 10 * 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Authorization': `Bearer ${window.localStorage.getItem('authToken') || ''}`,
  },
})

instance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  return config
})

instance.interceptors.response.use((response: AxiosResponse<any, any>) => {
  // console.log(response, '==')
  const result = response.data
  // if (result.code === 1101) {
  //   window.localStorage.setItem('authToken', '')
  //   window.location.href = result.data.loginUrl
  // }
  result.success = result.code === 1000
  return result
})

const request = {
  get<T = any>(url: string, params?: any): Promise<T> {
    return instance.get(url, { params })
  },
  post<T = any>(url: string, params?: any): Promise<T> {
    return instance.post(url, params)
  },
}

export default request
