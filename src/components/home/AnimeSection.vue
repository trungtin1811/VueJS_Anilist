<template>
  <section id="trending-now" class="py-10">
    <div class="flex items-center w-full justify-between">
      <a href="#" class="uppercase font-semibold section-title">
        {{ sectionName }}
      </a>
      <router-link :to="'/search/' + sectionId" class="capitalize font-semibold text-xl">view all</router-link>
    </div>
    <div class="anime-list flex justify-between">
      <DataSubSection v-for="anime in list" :key="anime.id" :anime="anime">
      </DataSubSection>
    </div>
  </section>
</template>

<script>
import DataSubSection from "./AnimeSubSection.vue";
export default {
  name: "anime-section",
  data() {
    return {};
  },
  components: {
    DataSubSection,
  },
  props: {
    sectionId: String,
    sectionName: String,
    list: Object,
    link: String,
  },
  methods: {},
};
</script>

<style>
.section-title {
  font-size: 1.6rem;
}
.anime-name {
  font-size: 1.4rem;
}
</style>
