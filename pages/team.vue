<template>
  <section class="relative items-start">
    <ContentDoc path="/team" v-slot="{ doc }">
      <!-- Image -->
      <FadeUp
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="hero-image"
      />
      <!-- Content -->
      <div class="site-padding z-20">
        <div class="crd right">
          <Squares class="squares" />
          <h1 class="page-title">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            <!-- Team Member -->
            <template
              :data="people"
              v-for="person of people"
              :key="person.slug"
            >
              <FadeUp class="flex flex-col flex-1">
                <TeamCard
                  :src="person.image"
                  :name="person.name"
                  :role="person.role"
                  :description="person.description"
                  :body="person"
                />
              </FadeUp>
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
