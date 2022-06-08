<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-06 16:28:25
 * @LastEditors: Truman 2291095018@qq.com
 * @LastEditTime: 2022-06-08 11:12:06
 * @FilePath: \learnvue3cms\src\views\main\analysis\dashboard\dashboard.vue
 * @Description:
-->
<!-- 题目：绿叶对根的情意
     中心：描写一次回家的旅途，很久之后重回故土的心情
     结构：
        开头：直叙开头，在外奔波，回家的日子很少
        主体：
            事件：描写高铁上车前 略写
            过渡段：列车发动了
            事件：乘坐高铁时沿途的风景，表现主题，详写
        结尾：下车后重新看到故乡的心情是怎样的，以绿叶对根的情意抒情
-->
<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hy-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <hy-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

import HyCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

const store = useStore()
// 请求数据
store.dispatch('dashboard/getDashboardDataAction')

// 获取数据
const categoryGoodsCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item: any) => {
    return { name: item.name, value: item.goodsCount }
  })
})
const categoryGoodsSale = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    xLabels.push(item.name)
    values.push(item.goodsCount)
  }
  return { xLabels, values }
})
const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    xLabels.push(item.name)
    values.push(item.goodsFavor)
  }
  return { xLabels, values }
})
const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item: any) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style lang="less" scoped>
.content-row {
  margin-top: 20px;
}
</style>
