/*

 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-06 13:38:38
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-06 13:54:12
 * @FilePath: \learnvue3cms\src\service\request\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface SDRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface SDRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: SDRequestInterceptors<T>
  showLoading?: boolean
}
