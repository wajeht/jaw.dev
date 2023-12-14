<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/blog', where: [{ layout: 'article' }], limit: 5, sort: [{ date: -1 }] }
</script>

<template>
  <main>
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path"><h2>{{ article.title }}</h2></NuxtLink>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </main>
</template>
