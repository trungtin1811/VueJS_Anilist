<template>
  <div
    class="anime-item relative"
    :dataId="anime.id"
    @mouseover="display(anime.id)"
    @mouseout="hide(anime.id)"
  >
    <router-link :to="'/anime/' + anime.id">
      <img
        alt=""
        class="rounded-md w-72 my-5 anime-cover"
        :src="anime.coverImage.extraLarge"
      />
      <div class="capitalize anime-name w-full">{{ anime.title.romaji }}</div>
    </router-link>
    <div
      class="hover-data bg-white p-10 rounded-2xl absolute left-full top-20 ml-5 z-50 space-y-5"
      :id="'anime-' + anime.id"
    >
      <div class="flex text-center justify-between">
        <div class="text-2xl">{{ getNewEp() || "" }}</div>
        <div v-if="anime?.meanScore != null" class="flex text-center space-x-4">
          <i class="bx bx-smile text-2xl"></i>
          <div class="text-2xl">
            {{ anime?.meanScore + "%" }}
          </div>
        </div>
      </div>
      <div class="text-xl" style="margin-bottom: 20px">
        <div>{{ anime?.studios?.nodes[0].name }}</div>
        <div class="capitalize">
          {{ anime?.format == "TV" ? "TV Show" : anime?.format }}
        </div>
      </div>
      <div class="space-x-4 mt-2">
        <GenreList
          v-for="(genre, index) in genres"
          :genre="genre.toLowerCase()"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GenreList from "./GenreList.vue";
export default {
  name: "data-sub-section",
  props: {
    no: Number,
    anime: Object,
  },
  data() {
    return { genres: [] };
  },
  components: {
    GenreList,
  },
  methods: {
    display(id) {
      document.querySelector("#anime-" + id).classList.add("hover-data-active");
    },
    getNewEp() {
      if (this.anime?.nextAiringEpisode?.episode != undefined) {
        return (
          "Ep " +
          this.anime?.nextAiringEpisode?.episode +
          " airing in " +
          (this.getDays(this.anime?.nextAiringEpisode?.timeUntilAiring) > 0
            ? this.getDays(this.anime?.nextAiringEpisode?.timeUntilAiring) +
              (this.getDays(this.anime?.nextAiringEpisode?.timeUntilAiring) > 1
                ? " hours"
                : " hour")
            : this.getHours(this.anime?.nextAiringEpisode?.timeUntilAiring))
        );
      } else {
        return this.anime?.season + " " + this.anime?.seasonYear;
      }
    },
    getDays(sec) {
      return Math.floor(sec / 86400);
    },
    getHours(sec) {
      return Math.floor((sec / 86400) * 60) > 1
        ? Math.floor((sec / 86400) * 60) + " hours"
        : Math.floor((sec / 86400) * 60) + " hour";
    },
    hide(id) {
      document
        .querySelector("#anime-" + id)
        .classList.remove("hover-data-active");
    },
  },
  created() {
    this.genres = this.anime?.genres?.slice(0, 3);
  },
};
</script>

<style>
.anime-item {
  max-width: 180px;
}
.anime-cover {
  width: 180px;
  height: 260px;
}
.hover-data {
  opacity: 0;
  width: 300px;
  transition: opacity 0.1s, transform 0.1s;
  transform: scale(0);
}
.hover-data-active {
  opacity: 1;
  transform: scale(1);
}
</style>
