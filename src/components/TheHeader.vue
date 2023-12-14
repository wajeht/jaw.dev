<script setup lang="ts"></script>

<template>
  <header>
    <h1>jaw.<span class="italic">dev</span></h1>
    <nav class="flex justify-between">
      <ul class="flex gap-2">
        <li>
          <NuxtLink to="/">home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects">projects</NuxtLink>
        </li>
      </ul>
      <TheColorScheme />
    </nav>
  </header>
</template>
