<script setup lang="ts"></script>

<template>
  <header class="mb-6">
    <h1>jaw.<span class="italic">dev</span></h1>

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
        <NuxtLink to="https://www.linkedin.com/in/kyawsny/" target="_blank">linkedin</NuxtLink>
        <NuxtLink to="https://github.com/wajeht" target="_blank">github</NuxtLink>


        <button class="flex items-center" v-if="$colorMode.value === 'dark'" @click="$colorMode.value = 'light'">
          <IconCSS name="carbon:sun" class="text-base" />
        </button>

        <button class="flex items-center" v-if="$colorMode.value === 'light'" @click="$colorMode.value = 'dark'">
          <IconCSS name="carbon:moon" class="text-base" />
        </button>
      </div>
    </nav>
  </header>
</template>
