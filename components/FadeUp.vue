<template>
  <div
    x-data
    class="opacity-0 translate-y-1/4 duration-500"
    x-intersect="$el.classList.add('opacity-100', '-translate-y-0')"
  >
    <slot />
  </div>
</template>
