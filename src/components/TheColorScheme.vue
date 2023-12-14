<template>
  <div class="flex gap-5">
    <!-- external -->
    <NuxtLink to="https://www.linkedin.com/in/kyawsny/" target="_blank">linkedin</NuxtLink>
    <NuxtLink to="https://github.com/wajeht" target="_blank">github</NuxtLink>


    <!-- theme -->
    <button class="flex items-center" v-if="$colorMode.value === 'dark'" @click="$colorMode.value = 'light'">
      <IconCSS name="carbon:sun" class="text-base" />
    </button>

    <button class="flex items-center" v-if="$colorMode.value === 'light'" @click="$colorMode.value = 'dark'">
      <IconCSS name="carbon:moon" class="text-base" />
    </button>
  </div>
</template>
