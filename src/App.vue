<template>
  <div id="app">
    <nav-bar/>
    <!--自定义router-view-->
    <customize-view/>
    <play-bar/>
  </div>
</template>
<script setup lang="ts">
import navBar from '@/components/layout/navBar.vue'
import CustomizeView from "@/components/router/customizeView.vue"
import PlayBar from "@/components/playbar/playBar.vue";


</script>