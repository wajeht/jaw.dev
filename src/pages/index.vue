<script setup lang="ts">
import { computed } from 'vue';
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const latestProject: QueryBuilderParams = { path: '/projects', limit: 2, sort: [{ date: -1 }] }
const latestArticle: QueryBuilderParams = { path: '/articles', limit: 2, sort: [{ date: -1 }] }
const waveHand = ref(true);

const computedWaveHandClasses = computed(() => !waveHand.value ? '' : 'animate-wave');

function toggleWaveHand(): void {
  waveHand.value = !waveHand.value;
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h2 class="flex items-center gap-2">
        <Icon :class="computedWaveHandClasses" name="👋" @click="toggleWaveHand" role="button" />
        hi there, this is <span class="italic font-extrabold">Jaw!</span>
      </h2>

      <p>Commodo cubilia aenean odio in ullamcorper ut phasellus amet sociosqu, nulla lectus class curae orci mi
        pretium dignissim. Praesent facilisis purus venenatis malesuada class aliquam ridiculus proin finibus potenti
        quam,
        phasellus eros tristique.</p>

      <p>Commodo cubilia aenean odio in ullamcorper ut phasellus amet sociosqu, nulla lectus class curae orci mi pretium
        dignissim. Praesent facilisis purus venenatis malesuada class aliquam ridiculus proin finibus potenti quam,
        felis consequat elit himenaeos pharetra dignissim donec laoreet pretium.
      </p>
    </div>

    <div class="mb-8">
      <h2><span class="mr-2">📚</span>latest projects</h2>
      <ContentList :query="latestProject" v-slot="{ list }">
        <div v-for="project in list" :key="project._path">
          <h3 class="flex gap-2 items-center">
            <NuxtLink class="flex items-center" style="text-decoration: none !important;" :to="project.demo"
              :title="`${project.title}-demo`" target="_blank">
              <span class="hover:underline"> {{ project.title }} </span>
              <IconCSS name="mdi:arrow-top-right" class="text-sm" />
            </NuxtLink>

            <NuxtLink
              class="flex justify-center text-[#454545] dark:text-[#d9d9d9] visited:text-current dark:visited:text-current hover:text-black dark:hover:text-white"
              :to="project.github" target="_blank" :title="`${project.title}-source-code`">
              <IconCSS name="mdi:github" class="text-base" />
            </NuxtLink>
          </h3>
          <p>{{ project.description }}</p>
        </div>
      </ContentList>
    </div>

    <div>
      <h2><span class="mr-2">📝</span>latest articles</h2>
      <ContentList :query="latestArticle" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h3>
            <NuxtLink :to="article._path">
              {{ article.title }}
            </NuxtLink>
          </h3>
          <p>{{ article.description }}</p>
        </div>
      </ContentList>
    </div>

  </div>
</template>
