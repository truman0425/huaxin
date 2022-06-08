/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-06 15:29:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-06 15:33:41
 * @FilePath: \learnvue3cms\src\global\register-properties.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    test() {
      console.log('测试输出')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
