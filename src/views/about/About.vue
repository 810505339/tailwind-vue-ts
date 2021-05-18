<template>
  <div>
    about
  </div>
</template>

<script lang="ts" setup>
import {onBeforeRouteLeave} from 'vue-router'

onBeforeRouteLeave(() => {
  console.log(1)
})


</script>

<style scoped>

</style>