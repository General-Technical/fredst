<template>
  <div class="light-bg w-screen fixed top-14 sm:top-[53px] pt-3 z-40">
    <ul
      class="flex justify-start sm:justify-end pb-4 site-padding border-b px-6 xl:px-0 trans"
    >
      <li class="decoration-info">
        <NuxtLink to="/home/about">About</NuxtLink>
      </li>
      <li class="decoration-neutral">
        <NuxtLink to="/home/expertise">Expertise</NuxtLink>
      </li>
      <li class="decoration-accent">
        <NuxtLink to="/home/team">Team</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply font-bold underline underline-offset-8 decoration-2 trans;
}
</style>
