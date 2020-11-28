<template>
  <div class="container">
    <my-header>{{headerTitle}}</my-header>
    <tab/>
    <search-input :placeholder='placeholder' :maxlength='maxlength'/>
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, toRef, watch } from 'vue'
import MyHeader from '@/components/Header/MyHeader'
import Tab from '@/components/Tab/index'
import SearchInput from '@/components/SearchInput/index'
export default {
  name:'App',
  components:{
    MyHeader,
    Tab,
    SearchInput
  },
  setup () {
    const store = useStore(), 
          router = useRouter(),
          state = store.state

    watch(() => {
      return router.currentRoute.value.name
    },(value) => {
      store.commit('setHeaderTitle',value)
      store.commit('setMaxlength',value)
      store.commit('setPlaceholder',value)
      store.commit('setField',value)
    })
    
    return computed(() => state).value
  }
}
</script>


