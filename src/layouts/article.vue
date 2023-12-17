<script setup lang="ts">
import { computed } from 'vue';
const { prev, next } = useContent();

const computedPrev = computed(() => prev.value && prev.value._path.includes('/articles'));
const computedNext = computed(() => next.value && next.value._path.includes('/articles'));
</script>

<template>
  <main class="max-w-[800px] mx-auto p-5 my-10">
    <TheHeader />
    <slot />

    <div class="flex justify-between">
      <p v-if="!computedPrev && computedNext"></p>
      <p v-if="computedPrev && !computedNext"></p>

      <p v-if="computedPrev" class="order-first">
        <NuxtLink :to="prev._path">
          <IconCSS name="mdi:arrow-left" class="me-[.5]" />
          <span> {{ prev.title }} </span>
        </NuxtLink>
      </p>

      <p v-if="computedNext" class="order-last">
        <NuxtLink :to="next._path">
          <span> {{ next.title }} </span>
          <IconCSS name="mdi:arrow-right" class="ms-[.5]" />
        </NuxtLink>
      </p>

    </div>
  </main>
</template>
