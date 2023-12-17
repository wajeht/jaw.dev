<script setup>
definePageMeta({ layout: 'article' })
</script>

<template>
  <ContentDoc>
    <template #not-found>
      <h2>This page could not be found</h2>
      <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
    </template>
  </ContentDoc>
</template>
