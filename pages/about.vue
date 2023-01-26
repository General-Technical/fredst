<template>
  <section class="relative">
    <ContentDoc path="/about" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image mt-28"
      />
      <!-- Content -->
      <div class="container">
        <div class="crd left">
          <Squares class="squares" />
          <h1 class="page-title">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </div>
        <div class="page-title-lrg flex flex-col gap-4 w-2/5 text-right">
          <div>
            <h2>Services</h2>
            <h3>Masterplanning</h3>
            <h3>Infrastructure Urban Designg</h3>
            <h3>Design & Documentation</h3>
            <h3>Contract Administration</h3>
            <h3>Graphic & 3D Visualisation</h3>
          </div>
          <div>
            <h2>Sectors</h2>
            <h3>Transport Infrastructure</h3>
            <h3>Social Infrastructure</h3>
            <h3>PUBLIC REALM, Parks & Open Space</h3>
            <h3>Residential</h3>
            <h3>Urban Mixed-Use</h3>
            <h3>Industrial</h3>
          </div>
        </div>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
useHead({
  title: "About Us - Fred St.",
});
</script>
