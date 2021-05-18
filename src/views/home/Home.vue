<template>
  <div v-for="item in banners" :key="item.imageUrl">
    <img :src="item.imageUrl"/>
  </div>
</template>

<script lang="ts" setup>
import {bannerApi} from '@/api/api'

const {banners} = await bannerApi()

console.log(banners)

</script>

