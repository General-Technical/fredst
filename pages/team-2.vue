<template>
  <section class="relative items-start">
    <ContentDoc path="/team" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image mt-28"
      />
      <!-- Content -->
      <div class="container-mid">
        <div class="second-content md:mt-0 left">
          <h2 class="text-white mb-96">
            Our team of highly skilled professionals are determined to provide
            the combined product of functional landscapes and creative outcomes
            in a socially responsible context.
          </h2>
          <FadeUp class="mt-44">
            <ContentRenderer :value="doc" class="markdown" />
          </FadeUp>
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
