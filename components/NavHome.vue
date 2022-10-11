<template>
  <div class="secondary-nav">
    <ul class="flex justify-end pb-3 sm:pb-4 site-padding px-6 xl:px-0 trans">
      <li class="decoration-info">
        <NuxtLink to="/about" class="secondary-nav-item">About</NuxtLink>
      </li>
      <li class="decoration-neutral">
        <NuxtLink to="/expertise" class="secondary-nav-item"
          >Expertise</NuxtLink
        >
      </li>
      <li class="decoration-accent">
        <NuxtLink to="/team" class="secondary-nav-item">Team</NuxtLink>
      </li>
      <li class="decoration-info">
        <NuxtLink to="/climate-active" class="secondary-nav-item"
          >Climate Active</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply font-bold underline underline-offset-8 decoration-2 trans;
}
</style>
