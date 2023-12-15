<script setup lang="ts"></script>

<template>
  <header class="mb-10">
    <h1 class="flex items-center gap-2">
      <Icon class="animate-wave" name="👋" /> hi there, this is <span class="italic">Jaw!</span>
    </h1>

    <nav class="flex justify-between">
      <ul class="flex gap-5">
        <li>
          <NuxtLink to="/" active-class="font-bold underline">home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" active-class="font-bold underline">blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" active-class="font-bold underline">projects</NuxtLink>
        </li>
      </ul>

      <div class="flex gap-5">
        <NuxtLink class="flex items-center justify-center" to="https://www.linkedin.com/in/kyawsny/" target="_blank" title="linkedin">
          <IconCSS name="mdi:linkedin" class="text-base" />
        </NuxtLink>

        <NuxtLink class="flex items-center justify-center" to="https://github.com/wajeht" target="_blank" title="github">
          <IconCSS name="mdi:github" class="text-base" />
        </NuxtLink>

        <button class="flex items-center" v-if="$colorMode.value === 'dark'" @click="$colorMode.preference = 'light'">
          <IconCSS name="material-symbols:sunny-rounded" class="text-sm" />
        </button>

        <button class="flex items-center" v-if="$colorMode.value === 'light'" @click="$colorMode.preference = 'dark'">
          <IconCSS name="material-symbols:dark-mode-outline-rounded" class="text-base" />
        </button>
      </div>
    </nav>
  </header>
</template>
