<template>
  <section class="relative items-start pt-36">
    <ContentDoc path="/team" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
      />
      <!-- Content -->
      <div class="site-padding">
        <FadeUp class="crd right">
          <h1 class="page-title">{{ doc.title }}</h1>
          <Squares class="squares" />
          <ContentRenderer :value="doc" />
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            <!-- Team Member -->
            <template
              :data="people"
              v-for="person of people"
              :key="person.slug"
            >
              <FadeUp class="flex flex-col flex-1">
                <NuxtLink :to="person._path" class="flex flex-col h-full">
                  <div
                    bgImage
                    :style="{ backgroundImage: 'url(' + person.image + ')' }"
                    class="aspect-square bg-cover mb-2"
                  />
                  <h3 class="underlined-text">{{ person.name }}</h3>
                  <p class="text-left">{{ person.description }}</p>
                  <p class="underlined-text">more...</p>
                </NuxtLink>
              </FadeUp>
            </template>
          </div>
        </FadeUp>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
const { data: people } = await useAsyncData('people', () => {
  return queryContent('/people').sort({ name: -1 }).find();
});

useHead({
  title: 'Team - Fred St.',
});
</script>
