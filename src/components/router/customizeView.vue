<template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <transition mode="out-in">
        <suspense :timeout="0">
          <component :is="Component"></component>
          <template #fallback>
            <div class="w-screen h-screen flex items-center justify-center fixed z-20 bg-gray-50">
              <it-loading/>
            </div>
          </template>
        </suspense>
      </transition>
    </template>
  </router-view>
</template>

<script setup lang="ts">
</script>