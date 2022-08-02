<template>
  <div>
    <h1
      class="flex site-padding justify-start items-end h-36 mb-8"
      id="residential"
    >
      Residential
    </h1>
    <template
      :data="residential"
      v-for="residential of residential"
      :key="residential.slug"
    >
      <div
        class="site-padding items-center justify-center relative min-h-screen"
      >
        <!-- Image -->
        <FadeUp
          bgImage
          :style="{ backgroundImage: 'url(' + residential.image + ')' }"
          class="hero-image right-6 rounded-tl-full shadow-xl"
        />
        <!-- Image Overlay -->
        <FadeUp
          bgImage
          class="hero-image right-6 bg-gradient-to-r from-secondary via-transparent to-transparent rounded-tl-full"
        />
        <!-- Card / Content -->
        <FadeUp>
          <h2 class="w-2/6 text-neutral">{{ residential.title }}</h2>
          <h3 class="mt-4">{{ residential.location }}</h3>
          <div
            class="card p-6 pl-0 m-0 w-2/3 bg-gradient-to-l from-secondary to-transparent z-50"
          >
            <h4>{{ residential.description }}</h4>
            <ContentRenderer :value="residential" />
            <div class="flex flex-row flex-wrap justify-between mt-4">
              <!-- Images -->
              <Lightbox>
                <!-- Thumbnail -->
                <template v-slot:summary>
                  <div
                    :style="{
                      backgroundImage: 'url(' + residential.image + ')',
                    }"
                    class="bg-cover aspect-[16/9] h-32 rounded"
                  />
                </template>
                <!-- Modal -->
                <template v-slot:details>
                  <div
                    class="flex flex-col h-fit my-auto mt-24 items-start justify-center gap-2"
                  >
                    <div class="max-w-3/4 m-auto">
                      <img :src="residential.image" class="w-full rounded-xl" />
                    </div>
                  </div>
                </template>
              </Lightbox>
              <Lightbox>
                <!-- Thumbnail -->
                <template v-slot:summary>
                  <div
                    :style="{
                      backgroundImage: 'url(' + residential.image + ')',
                    }"
                    class="bg-cover aspect-[16/9] h-32 rounded"
                  />
                </template>
                <!-- Modal -->
                <template v-slot:details>
                  <div
                    class="flex flex-col h-fit my-auto mt-24 items-start justify-center gap-2"
                  >
                    <div class="max-w-3/4 m-auto">
                      <img :src="residential.image" class="w-full rounded-xl" />
                    </div>
                  </div>
                </template>
              </Lightbox>
              <Lightbox>
                <!-- Thumbnail -->
                <template v-slot:summary>
                  <div
                    :style="{
                      backgroundImage: 'url(' + residential.image + ')',
                    }"
                    class="bg-cover aspect-[16/9] h-32 rounded"
                  />
                </template>
                <!-- Modal -->
                <template v-slot:details>
                  <div
                    class="flex flex-col h-fit my-auto mt-24 items-start justify-center gap-2"
                  >
                    <div class="max-w-3/4 m-auto">
                      <img :src="residential.image" class="w-full rounded-xl" />
                    </div>
                  </div>
                </template>
              </Lightbox>
              <Lightbox>
                <!-- Thumbnail -->
                <template v-slot:summary>
                  <div
                    :style="{
                      backgroundImage: 'url(' + residential.image + ')',
                    }"
                    class="bg-cover aspect-[16/9] h-32 rounded"
                  />
                </template>
                <!-- Modal -->
                <template v-slot:details>
                  <div
                    class="flex flex-col h-fit my-auto mt-24 items-start justify-center gap-2"
                  >
                    <div class="max-w-3/4 m-auto">
                      <img :src="residential.image" class="w-full rounded-xl" />
                    </div>
                  </div>
                </template>
              </Lightbox>
            </div>
          </div>
        </FadeUp>
      </div>
    </template>
  </div>
</template>

<script setup>
const { data: residential } = await useAsyncData("residential", () =>
  queryContent("/projects/residential/").find()
);
</script>
