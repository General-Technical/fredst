<template>
  <div
    class="w-screen bg-second shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] mt-24 z-50"
  >
    <footer>
      <div class="flex items-center justify-between w-full h-12 site-padding">
        <div class="flex pl-2 gap-2 justify-start">
          <Fb class="sosmed fill-info" />
          <In class="sosmed fill-neutral" />
          <Ig class="sosmed fill-accent" />
        </div>
        <NuxtLink to="/" class="flex justify-end gap-2">
          <Logo class="h-6 w-auto" />
        </NuxtLink>
      </div>
    </footer>
    <div class="flex gap-2 mt-6 mb-3 justify-center">
      <p class="font-bold text-xs">
        &copy; <span class="font-bold">2023</span>
      </p>
      <div class="flex my-auto">
        <p class="font-light text-xs uppercase">
          <a
            href="https://generaltechnical.com.au"
            target="_blank"
            class="text-xs font-light"
          >
            General Technical
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
