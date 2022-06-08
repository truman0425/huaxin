<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-06 10:14:40
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-06 15:53:27
 * @FilePath: \learnvue3cms\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'name',
  props: {
    name: {
      type: String
    }
  },
  setup() {
    return {
      zhCn
    }
  }
})
</script>
<style lang="less">
.app {
  height: 100%;
}
</style>
