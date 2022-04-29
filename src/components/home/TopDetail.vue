<template>
  <router-link
    :to="'/anime/' + anime.id"
    class="top-anime__item flex items-center space-x-5 my-5"
  >
    <div class="top-anime__item__order font-bold text-4xl mx-10 text-center">
      #{{ no }}
    </div>
    <div class="flex bg-white rounded-md w-full p-4 space-x-14 pr-32">
      <img :src="anime.coverImage.extraLarge" alt="" class="h-24" />
      <div class="flex flex-col justify-center space-y-3 w-1/2">
        <div class="anime-title text-2xl font-bold">
          {{ anime.title.romaji }}
        </div>
        <div class="flex space-x-3">
          <GenreList
            v-for="(genre, index) in anime.genres.slice(0, 5)"
            :genre="genre.toLowerCase()"
            :key="index"
          />
        </div>
      </div>
      <div class="flex items-center space-x-2 w-1/12">
        <i class="bx bx-smile text-green-400 bx-md"></i>
        <div>
          <div class="text-2xl">{{ anime.meanScore }}%</div>
          <div class="text-xl">{{ anime.popularity }}</div>
        </div>
      </div>
      <div class="flex items-center anime-genre">
        <div>
          <div class="text-2xl capitalize">
            {{ anime.format == "TV" ? "TV Show" : anime.format.toLowerCase() }}
          </div>
          <div class="text-xl">
            {{
              anime.episodes == 1
                ? convertDuration(anime.duration)
                : anime.episodes + " episodes"
            }}
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div>
          <div class="text-2xl capitalize">
            {{ anime.season.toLowerCase() }} {{ anime.seasonYear }}
          </div>
          <div class="text-xl capitalize">{{ anime.status.toLowerCase() }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import GenreList from "./GenreList.vue";
export default {
  name: "top-detail",
  components: {
    GenreList,
  },
  props: {
    anime: Object,
    no: Number,
  },
  methods: {
    convertDuration(min) {
      var h = Math.floor(min / 60);
      min %= 60;
      if (h > 1) {
        h = h + " hours, ";
      } else if (h > 0) {
        h = h + " hour, ";
      } else {
        h = "";
      }
      if (min > 1) {
        min = min + " mins";
      } else if (min > 0) {
        min = min + "   min";
      } else {
        min = "";
      }
      return h + min;
    },
  },
};
</script>

<style>
.top-anime__item__order {
  width: 4%;
}
.anime-genre {
  width: 10%;
}
</style>
