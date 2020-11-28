<template>
  <div>
    <error-tip/>
    <div v-if="!error_code">
      <day-card :data='dayData'/>
      <day-list :data='dayData'/>
    </div>
  </div>
</template>

<script>
import getData from '@/services'
import { onMounted,computed, watch, shallowReactive } from 'vue'
import { useStore } from 'vuex'
import DayCard from '@/components/DayPage/DayCard'
import DayList from '@/components/DayPage/List/index'
import ErrorTip from '@/components/ErrorTip/index'
import { getCurrentDate } from '@/libs/utils'
export default {
  name:'Day',
  components:{
    DayCard,
    DayList,
    ErrorTip
  },

  setup () {
    const store = useStore(),
          state = store.state

    onMounted(() => {
      getData(store,'day',getCurrentDate('day'))
    })

    watch(() => {
      return state.dayData
    },() => {
      store.commit('setError_code',0)
    })

    return {
      dayData: computed(() => state.dayData),
      error_code:computed(() => state.error_code)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>