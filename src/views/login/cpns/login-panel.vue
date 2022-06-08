<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-06 17:05:28
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-07 10:29:03
 * @FilePath: \learnvue3cms\src\views\login\cpns\login-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

// 定义属性
const currentTab = ref('account')
const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()

const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    console.log('手机登录')
  }
}

// export default defineComponent({
//   setup() {
//     const currentTab = ref('account')
//     const isKeepPassword = ref(true)

//     return {
//       currentTab,
//       isKeepPassword
//     }
//   }
// })
</script>

<style lang="less" scoped>
login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
