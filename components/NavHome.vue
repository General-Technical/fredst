<template>
  <div class="second-nav">
    <nav>
      <ul class="flex justify-end pb-3 sm:pb-4 xl:px-0 trans">
        <li class="decoration-info">
          <NuxtLink to="/about" class="second-nav-item">About</NuxtLink>
        </li>
        <li class="decoration-neutral">
          <NuxtLink to="/team" class="second-nav-item">Team</NuxtLink>
        </li>
        <li class="decoration-accent">
          <NuxtLink to="/climate" class="second-nav-item"
            >Climate Active</NuxtLink
          >
        </li>
        <li class="decoration-info">
          <NuxtLink to="/country" class="second-nav-item">Country</NuxtLink>
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
