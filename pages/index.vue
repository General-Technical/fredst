<template>
  <section class="relative">
    <!-- Image -->
    <FadeUp
      class="bg-[url('https://lawebloca.com/wp-content/uploads/2014/11/contemporary-modern-landscape-architecture.jpg')] hero-image"
    />
    <!-- Content -->
    <div class="site-padding">
      <FadeUp class="crd right">
        <h1 class="page-title">Ea, maxime. Rem officiis hic labore!</h1>
        <Squares class="squares" />
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <h3>Deserunt deleniti consequatur odio error.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est soluta
          earum, deleniti dignissimos error saepe repellat maxime distinctio
          ipsa cumque, alias, officiis corporis reprehenderit. Ea, maxime. Rem
          officiis hic labore!
        </p>
      </FadeUp>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "base",
});
useHead({
  title: "Contact - Fred St.",
});
</script>
