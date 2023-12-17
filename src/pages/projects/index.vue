<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/projects', limit: 5, sort: [{ date: -1 }] }
</script>

<template>
  <main>
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="project in list" :key="project._path">
        <h2 class="flex gap-2 items-baseline">
          <NuxtLink class="flex gap-1 items-start" style="text-decoration: none !important;" :to="project.demo"
            :title="`${project.title}-demo`" target="_blank">
            <span class="hover:underline"> {{ project.title }} </span>
            <Icon name="↗" class="!text-base mt-1" />
          </NuxtLink>

          <NuxtLink
            class="flex justify-center text-[#454545] dark:text-[#d9d9d9] visited:text-current dark:visited:text-current hover:text-black dark:hover:text-white"
            :to="project.github" target="_blank" :title="`${project.title}-source-code`">
            <IconCSS name="mdi:github" class="text-lg" />
          </NuxtLink>
        </h2>
        <p>{{ project.description }}</p>
      </div>
    </ContentList>
  </main>
</template>
