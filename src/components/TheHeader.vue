<template>
  <header class="mb-10 flex flex-col gap-3">
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

      <div class="flex gap-3">
        <NuxtLink external
          class="flex items-center justify-center text-[#454545] dark:text-[#d9d9d9] visited:text-current dark:visited:text-current hover:text-black dark:hover:text-white"
          to="mailto:kaywsny@gmail.com" title="email">
          <IconCSS name="mdi:email" class="text-base" />
        </NuxtLink>

        <NuxtLink external
          class="flex items-center justify-center text-[#454545] dark:text-[#d9d9d9] visited:text-current dark:visited:text-current hover:text-black dark:hover:text-white"
          to="https://www.linkedin.com/in/kyawsny/" target="_blank" title="linkedin">
          <IconCSS name="mdi:linkedin" class="text-base" />
        </NuxtLink>

        <NuxtLink external
          class="flex items-center justify-center text-[#454545] dark:text-[#d9d9d9] visited:text-current dark:visited:text-current hover:text-black dark:hover:text-white"
          to="https://github.com/wajeht" target="_blank" title="github">
          <IconCSS name="mdi:github" class="text-base" />
        </NuxtLink>

        <button class="flex items-center" v-if="$colorMode.value === 'dark'" @click="$colorMode.preference = 'light'">
          <IconCSS name="material-symbols:sunny-rounded"
            class="text-sm text-[#454545] dark:text-[#d9d9d9] hover:text-black dark:hover:text-white" />
        </button>

        <button class="flex items-center" v-if="$colorMode.value === 'light'" @click="$colorMode.preference = 'dark'">
          <IconCSS name="material-symbols:dark-mode-outline-rounded"
            class="text-base text-[#454545] dark:text-[#d9d9d9] hover:text-black dark:hover:text-white" />
        </button>
      </div>
    </nav>
  </header>
</template>
