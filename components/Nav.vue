<template>
  <ul class="font-bold">
    <li class="flex items-center gap-2 decoration-info">
      <div class="h-3 w-3 bg-info"></div>
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li class="flex items-center gap-2 decoration-neutral">
      <div class="h-3 w-3 bg-neutral"></div>
      <NuxtLink to="/projects">Projects</NuxtLink>
    </li>
    <li class="flex items-center gap-2 decoration-accent">
      <div class="h-3 w-3 bg-accent"></div>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </li>
  </ul>
</template>
