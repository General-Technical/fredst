<template>
  <section class="relative">
    <ContentDoc path="/team" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
        :class="doc.position"
      />
      <!-- Image Overlay -->
      <FadeUp class="hero-image" :class="doc.position" />
      <!-- Content -->
      <FadeUp>
        <h1 class="page-title" :class="doc.position">
          {{ doc.title }}
        </h1>
        <Squares class="squares" :class="doc.position" />
        <!-- Card -->
        <div class="content crd" :class="doc.position">
          <ContentRenderer :value="doc" />
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            <!-- Team Member -->
            <template
              :data="people"
              v-for="person of people"
              :key="person.slug"
            >
              <FadeUp class="flex flex-col flex-1 border p-3 pb-0 shadow-lg">
                <NuxtLink :to="person._path" class="flex flex-col h-full">
                  <div class="flex items-center mb-3">
                    <Squares />
                  </div>
                  <div
                    bgImage
                    :style="{ backgroundImage: 'url(' + person.image + ')' }"
                    class="aspect-square bg-cover mb-2"
                  />
                  <h3 class="text-left mb-1">{{ person.name }}</h3>
                  <p class="text-left">{{ person.description }}</p>
                  <p class="mt-auto">more...</p>
                </NuxtLink>
              </FadeUp>
            </template>
          </div>
        </div>
      </FadeUp>
    </ContentDoc>
  </section>
</template>

<script setup>
const { data: people } = await useAsyncData("people", () => {
  return queryContent("/people").sort({ name: -1 }).find();
});

useHead({
  title: "people - Fred St.",
});
</script>

<style scoped>
.left {
  @apply right-0 bg-gradient-to-r from-secondary to-transparent;
}
h1.left {
  @apply ml-6 bg-none;
}
.squares.left {
  @apply ml-6 mb-6 bg-none;
}
.content.left {
  @apply bg-gradient-to-l from-secondary to-transparent border-l-0;
}
.right {
  @apply ml-auto left-0 bg-gradient-to-l from-secondary to-transparent border-l-0;
}
h1.right {
  @apply ml-auto mr-6 bg-none text-right;
}
.squares.right {
  @apply justify-end mr-6 mb-6 bg-none;
}
.content.right {
  @apply bg-gradient-to-r from-secondary to-transparent border-l-0 sm:border-l border-r-0;
}
</style>
