<template>
  <div class="w-screen bg-secondary border-t z-50">
    <footer class="h-12 grid grid-cols-3">
      <NuxtLink to="/" class="flex items-end gap-2">
        <Squares class="mb-[2px]" />
        <Logo class="h-6 w-auto" />
      </NuxtLink>
      <div class="flex gap-2 mt-2 justify-center">
        <p class="font-bold text-xs">
          &copy; <span class="font-bold">2022</span>
        </p>
        <div class="flex my-auto">
          <p class="font-light text-xs uppercase">
            By:
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
      <div class="flex pl-2 gap-1 justify-end">
        <Fb class="sosmed fill-info" />
        <In class="sosmed fill-neutral" />
      </div>
    </footer>
  </div>
</template>
