<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <select class="text-[#454545] dark:bg-black dark:text-[#d9d9d9]  font-sans text-base" v-model="colorMode.preference">
    <option value="light">light</option>
    <option value="dark">dark</option>
  </select>
</template>
