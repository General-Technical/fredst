<template>
  <div class="secondary-nav">
    <nav>
      <ul class="flex justify-end pb-3 sm:pb-4 xl:px-0 trans">
        <li class="decoration-info">
          <NuxtLink to="/about" class="secondary-nav-item">About</NuxtLink>
        </li>
        <li class="decoration-neutral">
          <NuxtLink to="/team" class="secondary-nav-item">Team</NuxtLink>
        </li>
        <li class="decoration-accent">
          <NuxtLink to="/climate-active" class="secondary-nav-item"
            >Climate Active</NuxtLink
          >
        </li>
        <li class="decoration-info">
          <NuxtLink to="/country" class="secondary-nav-item">Country</NuxtLink>
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
