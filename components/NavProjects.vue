<template>
  <div
    class="bg-secondary w-screen fixed top-14 sm:top-[80px] pt-3 border-b z-40"
  >
    <ul class="flex flex-wrap justify-end pb-4 site-padding px-6 xl:px-0 trans">
      <li class="decoration-info">
        <NuxtLink to="/projects">All</NuxtLink>
      </li>
      <li class="decoration-neutral">
        <NuxtLink to="/projects/transport-infrastructure"
          >Transport Infrastructure</NuxtLink
        >
      </li>
      <li class="decoration-accent">
        <NuxtLink to="/projects/social-infrastructure"
          >Social Infrastructure</NuxtLink
        >
      </li>
      <li class="decoration-info">
        <NuxtLink to="/projects/parks-and-open-space"
          >Parks & Open Space</NuxtLink
        >
      </li>
      <li class="decoration-neutral">
        <NuxtLink to="/projects/residential-development"
          >Residential Development</NuxtLink
        >
      </li>
      <li class="decoration-accent">
        <NuxtLink to="/projects/urban-mixed-use">Urban Mixed Use</NuxtLink>
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
