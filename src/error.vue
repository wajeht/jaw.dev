<script setup>
const props = defineProps({ error: Object });
const isDev = process.dev;
const message = computed(() => String(props.error?.message || ''));
const is404 = computed(() => props.error?.statusCode === 404 || message.value?.includes('404'));
const language = computed(() => is404 ? 'This page could not be found' : 'An error occurred');
</script>

<template>
  <NuxtLayout>
    <h2> {{ language }}</h2>
    <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
    <pre v-if="isDev" class="text-left">{{ error }}</pre>
  </NuxtLayout>
</template>
