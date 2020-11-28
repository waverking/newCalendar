<template>
  <div class="tab">
    <div v-for="(item,index) in TabData" :key="index" class="tab-item">
      <tab-icon :iconText="item.iconText" :path="item.path">
        {{ item.tabText }}
      </tab-icon>
    </div>
  </div>
</template>

<script>
import TabIcon from './TabIcon'
import TabData from '@/data/tab'
export default {
  name:'Tab',
  components: {
    TabIcon
  },
  setup () {
    return {
      TabData
    }
  }
}
</script>

<style lang='scss' scoped>
  .tab {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    height: .44rem;
    background-color: #fff;
    border-top: 1px solid #ddd;
    
     .tab-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33.33%;
      height: 100%;
    }
  }
</style>