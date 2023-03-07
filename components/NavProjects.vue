<template>
  <div class="second-nav pt-3 h-[72px] sm:h-12">
    <nav>
      <ul class="flex flex-wrap justify-start pb-3 sm:pb-4 xl:px-0 trans">
        <li class="decoration-info">
          <NuxtLink to="/projects" class="second-nav-item">All</NuxtLink>
        </li>
        <li class="decoration-neutral">
          <NuxtLink
            to="/projects/transport-infrastructure"
            class="second-nav-item"
            >Transport</NuxtLink
          >
        </li>
        <li class="decoration-accent">
          <NuxtLink to="/projects/social-infrastructure" class="second-nav-item"
            >Social</NuxtLink
          >
        </li>
        <li class="decoration-info">
          <NuxtLink to="/projects/parks-and-open-space" class="second-nav-item"
            >Parks</NuxtLink
          >
        </li>
        <li class="decoration-neutral">
          <NuxtLink
            to="/projects/residential-development"
            class="second-nav-item"
            >Residential</NuxtLink
          >
        </li>
        <li class="decoration-accent">
          <NuxtLink to="/projects/urban-mixed-use" class="second-nav-item"
            >Urban</NuxtLink
          >
        </li>
        <li class="decoration-info">
          <NuxtLink to="/projects/industrial" class="second-nav-item">
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
