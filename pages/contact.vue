<template>
  <section class="relative">
    <!-- Image -->
    <FadeUp
      class="bg-[url('https://lawebloca.com/wp-content/uploads/2014/11/contemporary-modern-landscape-architecture.jpg')] hero-image"
    />
    <!-- Content -->
    <div class="flex flex-col md:flex-row site-padding w-full">
      <div class="crd left w-fit">
        <FadeUp>
          <h1 class="page-title">Contact</h1>
          <Squares class="squares mb-4" />
          <!-- Card -->
          <h4>Fred St Pty. Ltd.</h4>
          <p>29A Logan Rd, Woolloongabba QLD 4102, Australia</p>
          <a href="tel:61-733-932-914)">
            <p class="font-bold">+61 733 932 914</p>
          </a>
          <a href="mailto:info@fredst.com">
            <p class="font-bold">info@fredst.com</p>
          </a>
          <div class="flex gap-1 mb-10">
            <Fb class="sosmed fill-info" />
            <In class="sosmed fill-neutral" />
          </div>
        </FadeUp>
      </div>
      <FadeUp class="flex gap-3 mx-auto w-full site-padding">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.41072974254!2d153.0345296156378!3d-27.48759908288346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a153436b7a9%3A0xcdfddfba3e076fb5!2sFRED%20St%20pty%20ltd!5e0!3m2!1sen!2sid!4v1659878756581!5m2!1sen!2sid"
          width="100%"
          height="449"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
