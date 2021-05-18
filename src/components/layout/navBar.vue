<template>
  <div class="h-16">
    <nav class="flex items-center font-mono bg-white justify-between shadow-sm text-black h-16 fixed w-screen">
      <router-link to="/" class="p-4">EGG</router-link>
      <div class="px-4 cursor-pointer md:hidden" @click="">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </div>
      <div class="pr-8 md:block hidden">
        <!--      <router-link v-for=" item in props.navBarList" :key="item.id" :to="item.to">{{ item.title }}</router-link>-->
        <router-link to="/home" class="p-4">Home</router-link>
        <router-link to="/menu" class="p-4">Menu</router-link>
        <router-link to="/about" class="p-4">About</router-link>
        <router-link to="/contact" class="p-4">Contact</router-link>
      </div>
    </nav>
  </div>

</template>
<script lang="ts" setup>
import {defineProps} from 'vue'

</script>

