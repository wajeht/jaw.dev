<script setup lang="ts"></script>

<template>
  <header>
    <!-- title -->
    <h1>jaw.<span class="italic">dev</span></h1>

    <!-- nav -->
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
      <TheColorScheme />
    </nav>
  </header>
</template>
