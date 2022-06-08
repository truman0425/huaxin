/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-06 14:32:52
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-06 14:35:14
 * @FilePath: \learnvue3cms\src\service\main\system\system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import sdRequest from '../../index'

import { IDataType } from '../../type'

export function getPageListData(url: string, queryInfo: any) {
  return sdRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return sdRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return sdRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return sdRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
