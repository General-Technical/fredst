<template>
  <div
    x-data
    class="opacity-0 translate-x-1/4 duration-700"
    x-intersect="$el.classList.add('opacity-100', 'translate-x-0')"
  >
    <slot />
  </div>
</template>

x-intersect:leave="$el.classList.remove('opacity-100', 'translate-x-0')"
