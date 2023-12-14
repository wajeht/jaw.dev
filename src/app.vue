<script setup lang="ts">
import '@/assets/css/tailwind.css'
import '@/assets/css/overrides.css'
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#ca1a70" :duration="2000"  :throttle="0"/>
    <NuxtPage />
  </NuxtLayout>
</template>
