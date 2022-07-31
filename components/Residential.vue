<template>
  <div>
    <template :data="sector" v-for="sector of sector" :key="'#' + sector.slug">
      <div
        class="site-padding items-center justify-center relative min-h-screen"
      >
        <!-- Image -->
        <FadeUp
          bgImage
          :style="{ backgroundImage: 'url(' + sector.image + ')' }"
          class="bg-cover aspect-[3/4] xl:aspect-[16/9] shadow-xl mb-auto w-5/6 h-auto absolute right-6 rounded-tl-full"
        />
        <!-- Image Overlay -->
        <FadeUp
          bgImage
          class="bg-cover aspect-[3/4] xl:aspect-[16/9] mb-auto w-5/6 h-auto absolute right-6 bg-gradient-to-r from-secondary via-transparent to-transparent rounded-tl-full"
        />
        <!-- Card / Content -->
        <FadeUp>
          <h1 class="w-1/6 mb- text-neutral">{{ sector.title }}</h1>
          <div
            class="card py-6 m-0 w-2/3 bg-gradient-to-l from-secondary to-transparent pl-0 z-50"
          >
            <ContentRenderer :value="sector" />
            <div class="flex flex-row flex-wrap justify-between mt-4 mr-6">
              <Lightbox>
                <!-- Thumbnails -->
                <template v-slot:summary>
                  <div
                    :style="{ backgroundImage: 'url(' + sector.image + ')' }"
                    class="bg-cover aspect-[16/9] h-32 rounded"
                  />
                </template>
                <!-- Modal -->
                <template v-slot:details>
                  <div
                    class="flex flex-col h-fit my-auto mt-24 items-start justify-center gap-2"
                  >
                    <div class="max-w-3/4 m-auto">
                      <img :src="sector.image" class="w-full rounded-xl" />
                    </div>
                  </div>
                </template>
              </Lightbox>
              <Lightbox>
                <!-- Thumbnails -->
                <template v-slot:summary>
                  <div
                    :style="{ backgroundImage: 'url(' + sector.image + ')' }"
                    class="bg-cover aspect-[16/9] h-32 rounded"
                  />
                </template>
                <!-- Modal -->
                <template v-slot:details>
                  <div
                    class="flex flex-col h-fit my-auto mt-24 items-start justify-center gap-2"
                  >
                    <div class="max-w-3/4 m-auto">
                      <img :src="sector.image" class="w-full rounded-xl" />
                    </div>
                  </div>
                </template>
              </Lightbox>
              <Lightbox>
                <!-- Thumbnails -->
                <template v-slot:summary>
                  <div
                    :style="{ backgroundImage: 'url(' + sector.image + ')' }"
                    class="bg-cover aspect-[16/9] h-32 rounded"
                  />
                </template>
                <!-- Modal -->
                <template v-slot:details>
                  <div
                    class="flex flex-col h-fit my-auto mt-24 items-start justify-center gap-2"
                  >
                    <div class="max-w-3/4 m-auto">
                      <img :src="sector.image" class="w-full rounded-xl" />
                    </div>
                  </div>
                </template>
              </Lightbox>
              <Lightbox>
                <!-- Thumbnails -->
                <template v-slot:summary>
                  <div
                    :style="{ backgroundImage: 'url(' + sector.image + ')' }"
                    class="bg-cover aspect-[16/9] h-32 rounded"
                  />
                </template>
                <!-- Modal -->
                <template v-slot:details>
                  <div
                    class="flex flex-col h-fit my-auto mt-24 items-start justify-center gap-2"
                  >
                    <div class="max-w-3/4 m-auto">
                      <img :src="sector.image" class="w-full rounded-xl" />
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
const { data: sector } = await useAsyncData("sector", () =>
  queryContent("/projects/sector/").find()
);
</script>
