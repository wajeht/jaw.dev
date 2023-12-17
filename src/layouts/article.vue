<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types/index';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const { data } = await useAsyncData('navigation', () => fetchContentNavigation());
const articles = ref<NavItem[]>([]);

data.value?.filter((d) => {
  if (d.title === 'Articles') {
    articles.value = d.children as NavItem[];
  }
});

const route = useRoute();

const navigation = computed(() => {
  const currentIndex = articles.value.findIndex((article) => article._path === route.path);
  const prev = articles.value[currentIndex - 1] || null;
  const next = articles.value[currentIndex + 1] || null;
  return { prev, next };
});

</script>

<template>
  <main class="max-w-[800px] mx-auto p-5 my-10">
    <TheHeader />

    <slot />

    <div class="flex justify-between">
      <p v-if="!navigation.prev && navigation.next"></p>
      <p v-if="navigation.prev && !navigation.next"></p>

      <p v-if="navigation.prev" class="order-first">
        <NuxtLink :to="navigation.prev._path">
          <IconCSS name="mdi:arrow-left" class="me-[.5]" />
          <span> {{ navigation.prev.title }} </span>
        </NuxtLink>
      </p>

      <p v-if="navigation.next" class="order-last">
        <NuxtLink :to="navigation.next._path">
          <span> {{ navigation.next.title }} </span>
          <IconCSS name="mdi:arrow-right" class="ms-[.5]" />
        </NuxtLink>
      </p>
    </div>
  </main>
</template>
