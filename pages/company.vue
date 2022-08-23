<template>
  <section class="relative">
    <ContentDoc path="/home" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image left"
      />
      <!-- Overlay -->
      <FadeUp class="hero-image left h-full" />
      <!-- Content -->
      <div class="site-padding">
        <FadeUp>
          <h1 class="page-title left">
            {{ doc.title }}
          </h1>
          <Squares class="squares left" />
          <!-- Card -->
          <ContentRenderer :value="doc" class="content crd left" />
        </FadeUp>
      </div>
    </ContentDoc>
  </section>
</template>
