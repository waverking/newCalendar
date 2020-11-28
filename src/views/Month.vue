<template>
  <div>
    <error-tip/>
    <div v-if="!error_code">
      <card-list :data='monthData'/>
    </div>
  </div>
</template>

<script>
import getData from '@/services'
import { onMounted,computed,watch } from 'vue' 
import { useStore } from 'vuex'
import { getCurrentDate } from '@/libs/utils'
import CardList from '@/components/MonthPage/List'
import ErrorTip from '@/components/ErrorTip'
export default {
  name:'Month',
  components:{
    CardList,
    ErrorTip
  },
  setup () {
    const store = useStore(),
          state = store.state

    onMounted(() => {
      getData(store,'month',getCurrentDate('month'))
    })

    watch(() => {
      return state.error_code 
    },() => {
      store.commit('setError_code',0)
    })

    return{
      monthData: computed(() => state.monthData),
      error_code: computed(() => state.error_code)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>