<template>
  <div class="secondary-nav">
    <ul class="flex flex-wrap justify-end pb-4 site-padding px-6 xl:px-0 trans">
      <li class="decoration-info">
        <NuxtLink to="/projects">All</NuxtLink>
      </li>
      <li class="decoration-neutral">
        <NuxtLink to="/projects/transport-infrastructure">Transport</NuxtLink>
      </li>
      <li class="decoration-accent">
        <NuxtLink to="/projects/social-infrastructure">Social</NuxtLink>
      </li>
      <li class="decoration-info">
        <NuxtLink to="/projects/parks-and-open-space">Parks</NuxtLink>
      </li>
      <li class="decoration-neutral">
        <NuxtLink to="/projects/residential-development">Residential</NuxtLink>
      </li>
      <li class="decoration-accent">
        <NuxtLink to="/projects/urban-mixed-use">Urban</NuxtLink>
      </li>
      <li class="decoration-info">
        <NuxtLink to="/projects/industrial"> Industrial</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply font-bold underline underline-offset-8 decoration-2 trans;
}
</style>
