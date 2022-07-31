<template>
  <div>
    <button @click="setActive" class="w-full">
      <slot name="summary" />
    </button>
    <Teleport to="body">
      <div
        class="hidden site-padding trans fixed top-0 left-0 right-0 h-screen bottom-0 bg-secondary dark:bg-tertiary !bg-opacity-95 z-50"
        :class="{ active }"
      >
        <button
          @click="setActive"
          class="absolute top-6 left-1/2 -translate-x-1/2 hover:text-hover site-padding"
        >
          <FadeDown>
            <Close />
          </FadeDown>
        </button>
        <FadeUpLeave>
          <slot name="details" />
        </FadeUpLeave>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    setActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.active {
  @apply block;
}
</style>
