<script setup lang="ts">
import { computed } from 'vue';
import type { NavItem } from '@nuxt/content/dist/runtime/types/index';

const route = useRoute();

const { data } = await useAsyncData('navigation', () => fetchContentNavigation());

const articlesData = computed(() => {
  const articlesSection = data.value?.find((d) => d.title === 'Articles');
  return articlesSection ? articlesSection.children as NavItem[] : [];
});

const navigationLinks = computed(() => {
  const currentIndex = articlesData.value.findIndex((article) => article._path === route.path);
  return {
    prev: articlesData.value[currentIndex - 1] || null,
    next: articlesData.value[currentIndex + 1] || null,
  };
});
</script>

<template>
  <main class="max-w-[800px] mx-auto p-5 my-7">
    <TheHeader />

    <slot />

    <div class="flex justify-between gap-5">
      <div v-if="!navigationLinks.prev && navigationLinks.next"></div>
      <div v-if="navigationLinks.prev && !navigationLinks.next"></div>

      <template v-if="navigationLinks.prev">
        <h4>
          <NuxtLink :to="navigationLinks.prev._path" class="order-first">
            <IconCSS name="mdi:arrow-left" class="me-[.5]" />
            {{ navigationLinks.prev.title }}
          </NuxtLink>
        </h4>
      </template>

      <template v-if="navigationLinks.next">
        <h4>
          <NuxtLink :to="navigationLinks.next._path" class="order-last">
            {{ navigationLinks.next.title }}
            <IconCSS name="mdi:arrow-right" class="ms-[.5]" />
          </NuxtLink>
        </h4>
      </template>
    </div>
  </main>
</template>
