<template>
  <div>
    <error-tip/>
    <div v-if="!error_code">
      <card-list :data="yearData"/>
    </div>
  </div>
</template>

<script>
import getData from '@/services'
import { onMounted,computed,watch } from 'vue'
import { useStore } from 'vuex'
import { getCurrentDate } from '@/libs/utils'
import ErrorTip from '@/components/ErrorTip'
import CardList from '@/components/YearPage/List'
export default {
  name:'Year',
  components:{
    ErrorTip,
    CardList
  },
  setup () {
    const store = useStore(),
          state = store.state

    onMounted(() => {
      getData(store,'year',getCurrentDate('year'))
    })

    watch(() => {
      return state.yearData
    },() => {
      store.commit('setError_code',0)
    })

    return {
      yearData:computed(() => state.yearData),
      error_code: computed(() => state.error_code)
    }  
  }
}
</script>

<style lang='scss' scoped>

</style>