<template>
  <div class="error-tip" v-if="error_code">
    <img :src="require('../../assets/img/error.png')" />
    <p>{{ errorData[error_code] }}</p>
  </div>
</template>

<script>
import errorData from '@/data/error'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name:'ErrorTip',
  setup () {
    const store = useStore(),
          state = store.state
    return {
      errorData,
      error_code:computed(() => state.error_code)
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-tip {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    img {
      width: .5rem;
    }

    p {
      margin-top: .15rem;
      font-size: .14rem;
      color: #999;
    }
  }
</style>