<template>
  <section id="top-anime" class="py-10">
    <div class="flex items-center w-full justify-between mb-5">
      <a href="#" class="uppercase font-semibold section-title">
        {{ sectionName }}
      </a>
      <router-link
        :to="'/search/' + sectionId"
        class="capitalize font-semibold text-xl"
        >view all</router-link
      >
    </div>
    <div class="flex flex-col justify-between">
      <TopDetail
        v-for="(anime, index) in list"
        :key="anime.id"
        :anime="anime"
        :no="index + 1"
      />
    </div>
  </section>
</template>
<script>
import TopDetail from "./TopDetail.vue";

export default {
  name: "top-anime",
  data() {
    return {};
  },
  components: {
    TopDetail,
  },
  props: {
    sectionId: String,
    sectionName: String,
    list: Object,
  },
};
</script>

<style></style>
