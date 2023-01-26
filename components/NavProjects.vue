<template>
  <div class="secondary-nav">
    <nav>
      <ul class="flex justify-end pb-3 sm:pb-4 xl:px-0 trans">
        <li class="decoration-info">
          <NuxtLink to="/projects" class="secondary-nav-item">All</NuxtLink>
        </li>
        <li class="decoration-neutral">
          <NuxtLink
            to="/projects/transport-infrastructure"
            class="secondary-nav-item"
            >Transport</NuxtLink
          >
        </li>
        <li class="decoration-accent">
          <NuxtLink
            to="/projects/social-infrastructure"
            class="secondary-nav-item"
            >Social</NuxtLink
          >
        </li>
        <li class="decoration-info">
          <NuxtLink
            to="/projects/parks-and-open-space"
            class="secondary-nav-item"
            >Parks</NuxtLink
          >
        </li>
        <li class="decoration-neutral">
          <NuxtLink
            to="/projects/residential-development"
            class="secondary-nav-item"
            >Residential</NuxtLink
          >
        </li>
        <li class="decoration-accent">
          <NuxtLink to="/projects/urban-mixed-use" class="secondary-nav-item"
            >Urban</NuxtLink
          >
        </li>
        <li class="decoration-info">
          <NuxtLink to="/projects/industrial" class="secondary-nav-item">
            Industrial</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply font-bold underline underline-offset-8 decoration-2 trans;
}
</style>
