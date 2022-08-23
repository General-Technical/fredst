<template>
  <div
    class="bg-secondary w-screen fixed top-10 sm:top-[80px] pt-3 z-10 border-b"
  >
    <ul class="flex justify-end pb-3 sm:pb-4 site-padding px-6 xl:px-0 trans">
      <li class="decoration-info">
        <NuxtLink to="/about">About Us</NuxtLink>
      </li>
      <li class="decoration-neutral">
        <NuxtLink to="/expertise">Expertise</NuxtLink>
      </li>
      <li class="decoration-accent">
        <NuxtLink to="/team">The Team</NuxtLink>
      </li>
      <li class="decoration-info">
        <NuxtLink to="/climate-active">Climate Active</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply font-bold underline underline-offset-8 decoration-2 trans;
}
</style>
