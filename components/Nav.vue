<template>
  <ul>
    <li>
      <div class="dropdown dropdown-hover">
        <NuxtLink to="/" class="nav-item pointer-events-none">
          <button>About</button>
        </NuxtLink>
        <ul tabindex="0" class="dropdown-content menu shadow">
          <li><a href="/#home">Intro</a></li>
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#expertise">Expertise</a></li>
          <li><a href="/#team">Team</a></li>
        </ul>
      </div>
    </li>
    <li>
      <div class="dropdown dropdown-hover">
        <NuxtLink to="projects" class="nav-item pointer-events-none">
          <button>Projects</button>
        </NuxtLink>
        <ul tabindex="0" class="dropdown-content menu shadow">
          <li>
            <a href="/projects#residential">Residential</a>
          </li>
          <li>
            <a href="/projects#tourism">Tourism</a>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <NuxtLink to="contact" class="nav-item">
        <button>Contact</button>
      </NuxtLink>
    </li>
    <li class="flex pl-2 gap-1">
      <Fb class="sosmed" />
      <Ig class="sosmed" />
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply text-secondary font-bold bg-primary trans;
}
</style>
