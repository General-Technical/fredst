<template>
  <section>
    <div class="flex site-padding justify-start items-end h-36 mb-8">
      <FadeUp>
        <h1>Contact</h1>
      </FadeUp>
    </div>
    <FadeUp class="h-screen flex flex-1 justify-end items-center">
      <div class="m-auto pb-32">
        <iframe
          src="https://www.cognitoforms.com/f/6Ax0zmUI6UeB6_7JUBHcjA/19"
          style="border: 0; width: 800px"
          height="513"
          class="flex justify-center w-full mx-auto"
        >
        </iframe>
      </div>
    </FadeUp>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "contact",
});
useHead({
  title: "Contact - Fred St.",
});
</script>
