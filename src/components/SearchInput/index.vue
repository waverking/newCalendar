<template>
  <div class="search-wrap">
    <input type="text" 
           :placeholder="placeholder" 
           :maxlength="maxlength"
           :value='condition' 
           @input="searchData($event)"
    />
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { formatUserDate, getCurrentDate } from '@/libs/utils';
import getData from '@/services'

export default {
  name:'SearchInput',
  props:{
    placeholder:String,
    maxlength:Number
  },
  setup (props) {
    let condition = ref(''),
        store = useStore(),
        state = store.state,
        field = null
    const searchData = (e) => {
            condition.value = e.target.value
            field = computed(() => state.field).value
            if(condition.value.length === props.maxlength) {
              getData(store, field, formatUserDate(condition.value));
            }else if(condition.value.length === 0) {
              getData(store, field, getCurrentDate(field));
            }
          }
    watch(() => {
      return state.field
    },() => {
      condition.value = ''
    })
    return {
      condition,
      searchData
    }
  }
}
</script>

<style lang='scss' scoped>
  .search-wrap {
    position: fixed;
    top: .44rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .38rem;
    padding: .03rem .1rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;

    input {
      width: 100%;
      height: 100%;
      font-size: .14rem;
      border: 1px solid #ddd;
      text-indent: .1rem;
      border-radius: .03rem;

      &:focus {
        border-color: #ed4040;
        box-shadow: 0 0 .02rem #ed4040;
        transition: all .3s;
      }
    }
  }
</style>