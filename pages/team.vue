<template>
  <section class="relative items-start">
    <ContentDoc path="/team" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image mt-28"
      />
      <div
        class="grid grid-cols-5 3xl:grid-cols-2 gap-8 site-padding md:absolute mt-96 md:mt-0 3xl:mt-[25vh] top-72 z-50"
      >
        <h2
          class="text-right text-white col-span-5 md:col-span-2 3xl:col-span-1 md:text-3xl 3xl:text-5xl 3xl:leading-normal 3xl:mx-auto"
        >
          Our team of highly skilled professionals are determined to provide the
          combined product of functional landscapes and creative outcomes in a
          socially responsible context.
        </h2>
      </div>
      <!-- Content -->
      <div class="container-mid">
        <div class="second-content left">
          <p
            class="not-prose font-body text-xl font-normal pt-16 lg:pt-2 md:mt-0 3xl:text-4xl"
          >
            FRED St was started in 2014 and in that time we have been lucky
            enough to receive a number of industry awards:
          </p>
          <ContentRenderer :value="doc" class="markdown" />
        </div>
        <div class="crd right fade-up">
          <h1 class="page-title">{{ doc.title }}</h1>
          <Squares class="squares" />
          <div class="team-grid">
            <!-- Team Member -->
            <template
              :data="people"
              v-for="person of people"
              :key="person.slug"
            >
              <div class="flex flex-col flex-1">
                <TeamCard
                  :src="person.image"
                  :name="person.name"
                  :role="person.role"
                  :description="person.description"
                  :body="person"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
    </ContentDoc>
  </section>
</template>

<script setup>
const { data: people } = await useAsyncData("people", () => {
  return queryContent("/people").find();
});

useHead({
  title: "Team - Fred St.",
});
</script>
