<template>
  <div class="transactions-page flex fdr-c">
    <header-nav :title="$route.meta.title" back="/user"></header-nav>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="flex:1" head-height="100">
      <div class="transactions-page-container">
        <van-cell :border="false" v-for="item in tasksList" :key="item.taskId" :title="item.taskName" :label="item.remark">
          <template #icon>
            <img class="tasks-icon" :src="item.taskIcon">
          </template>
          <template #default>
            <div>
              <p>奖励：EXP{{item.experience}}</p>
              <van-button round v-if="item.currentType === 1" class="do-tasks" disabled>去完成</van-button>
              <van-button round v-else-if="item.currentType === 2" class="get-exp" @click="getExp(item.taskId)">领取</van-button>
              <van-button round disabled v-else-if="item.currentType === 3">已领取</van-button>
              <van-button round disabled v-else-if="item.currentType === 4">特殊情况</van-button>
            </div>
          </template>
        </van-cell>
      </div>
      <van-empty v-if="!tasksList.length" :image="require('@/assets/images/public/icon_kongshuju.png')"/>
    </van-pull-refresh>
  </div>
</template>

<script>
import taskspage from './index';
export default taskspage;
</script>
<style lang="stylus">
@import './index.styl';
</style>