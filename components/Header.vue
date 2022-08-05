<template>
  <header>
    <nav>
      <NuxtLink to="/" class="flex justify-end items-end gap-2">
        <Squares class="mb-[2px]" />
        <img src="/assets/FredSt_Logo.png" alt="Fred St." class="h-9" />
      </NuxtLink>
      <!-- Main Nav -->
      <Nav class="hidden md:flex ml-auto" />
      <!-- Mobile Nav Button -->
      <div class="flex md:hidden ml-auto">
        <button title="Menu" @click="mobileMenuOpen = true">
          <svg
            class="w-12 h-12 p-0 m-0 md:hidden text-primary hover:text-hover"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <!-- Mobile Nav -->
      <transition name="menu">
        <NavMobile v-if="mobileMenuOpen" @close="mobileMenuOpen = false" />
      </transition>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
