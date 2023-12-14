<script setup lang="ts"></script>

<template>
  <header>
    <nav class="flex justify-between">
      <ul class="flex gap-2">
        <li>
          <NuxtLink to="/">home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects">projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">blog</NuxtLink>
        </li>
      </ul>
      <TheColorScheme />
    </nav>
  </header>
</template>
