<template>
  <header class="mb-7 flex flex-col gap-3">
    <NuxtLink to="/" class="domain">
      <h1>Jaw.<span class="italic">dev</span></h1>
    </NuxtLink>

    <nav class="flex justify-between">
      <ul class="flex gap-5">
        <li>
          <NuxtLink to="/" active-class="font-bold underline">home</NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/articles" active-class="font-bold underline">articles</NuxtLink>
        </li> -->
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
          class="flex items-center justify-center text-[#454545] dark:text-[#d9d9d9] visited:text-current dark:visited:text-current hover:text-[#0A66C2] dark:hover:text-[#0A66C2]"
          to="https://www.linkedin.com/in/kyawsny/" target="_blank" title="linkedin">
          <IconCSS name="mdi:linkedin" class="text-base" />
        </NuxtLink>

        <NuxtLink external
          class="flex items-center justify-center text-[#454545] dark:text-[#d9d9d9] visited:text-current dark:visited:text-current hover:text-black dark:hover:text-white"
          to="https://github.com/wajeht" target="_blank" title="github">
          <IconCSS name="mdi:github" class="text-base" />
        </NuxtLink>


        <button name="light" key="light" class="flex items-center" v-if="$colorMode.value === 'dark'"
          @click="$colorMode.preference = 'light'">
          <IconCSS name="material-symbols:sunny-rounded"
            class="text-sm text-[#454545] dark:text-[#d9d9d9] dark:hover:text-[#FFCE48]" />
        </button>

        <button name="dark" key="dark" class="flex items-center" v-if="$colorMode.value === 'light'"
          @click="$colorMode.preference = 'dark'">
          <IconCSS name="material-symbols:dark-mode"
            class="text-sm text-[#454545] dark:text-[#d9d9d9] hover:text-[#0A66C2]" />
        </button>
      </div>
    </nav>
  </header>
</template>
