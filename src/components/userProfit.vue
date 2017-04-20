<template>
    <div>
        <div>
            <router-link :to="{name:'details'}">查看详情</router-link>
            <v-data></v-data>
        </div>
    </div>
</template>
<script>
import vData from './vdata'
export default {
  components: {
    vData
  }
}
</script>