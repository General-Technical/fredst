<template>
  <section class="relative items-start pt-36">
    <!-- Image -->
    <FadeUp
      class="bg-[url('https://i.pinimg.com/originals/7c/77/d0/7c77d09e50a3ea00d6d7858b91bd28e8.jpg')] hero-image"
    />
    <!-- Content -->
    <div class="site-padding">
      <FadeUp class="crd right">
        <h1 class="page-title">Team</h1>
        <Squares class="squares" />
        <div class="flex gap-8">
          <div class="w-2/5">
            <h3>
              Lead by Tessa Leggo, our small team of highly skilled
              professionals are determined to provide the combined product of
              functional landscapes and creative outcomes.
            </h3>
            <h4>Tessa Leggo</h4>
            <h4>Director & Registered Landscape Architect</h4>
          </div>
          <div class="w-3/5">
            <p>
              Tessa is a passionate Landscape Architect with extensive
              experience in the design of public open spaces, urban multi-use,
              residential communities and transport infrastructure. She has
              worked within local government, in Dubai, UAE, and in
              multi-disciplinary firms where she had the opportunity to work on
              high profile, large scale projects.
            </p>
            <p>
              Tessa has had extensive experience in the design and documentation
              of play experiences, from small scale to multi-million dollar
              projects. Tessa was the lead designer on the winning Cairns
              connect bid for the Cairns Bruce Highway Upgrade; was the Urban
              Design lead for the Eastern connection works on the winning the
              Transcity Legacy Way Bid; and was Urban Design lead for the
              Airport Link, Bowen Hills precinct, and Airport Roundabout Upgrade
              Projects.
            </p>
            <p>
              Currently completing the detailed design for the Heritage Listed
              site of Bremer TAFE, she’s involved in the delivery of
              interpretive design for this historical site. She has significant
              experience working in multi-disciplinary teams integrating
              innovative and creative urban design and community outcomes within
              complex engineering designs.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          <!-- Team Member -->
          <template :data="people" v-for="person of people" :key="person.slug">
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
