<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div class="flex gap-5">
    <!-- external -->
    <NuxtLink to="https://www.linkedin.com/in/kyawsny/" target="_blank">linkedin</NuxtLink>
    <NuxtLink to="https://github.com/wajeht" target="_blank">github</NuxtLink>

    <!-- theme -->
    <select class="text-[#454545] dark:bg-black dark:text-[#d9d9d9] text-sm" v-model="colorMode.preference">
      <option value="light">☀️</option>
      <option value="dark">🌚</option>
    </select>
  </div>
</template>
