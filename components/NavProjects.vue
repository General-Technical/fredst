<template>
  <div class="light-bg w-screen fixed top-14 sm:top-[53px] pt-3 z-40">
    <ul
      class="flex flex-wrap justify-start sm:justify-end pb-4 site-padding border-b px-6 xl:px-0 trans"
    >
      <li class="decoration-info">
        <NuxtLink to="/projects">All</NuxtLink>
      </li>
      <li class="decoration-neutral">
        <NuxtLink to="/projects/residential">Residential</NuxtLink>
      </li>
      <li class="decoration-accent">
        <NuxtLink to="/projects/tourism">Tourism</NuxtLink>
      </li>
      <li class="decoration-info">
        <NuxtLink to="/projects/transport">Transport</NuxtLink>
      </li>
    </ul>
  </div>
</template>
