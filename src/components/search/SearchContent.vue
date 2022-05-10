<template>
  <section id="search">
    <div class="search__container">
      <div v-if="list?.length != 0">
        <div class="anime-list flex justify-between flex-wrap space-x-3 mt-10">
          <!-- <div v-for="anime in list" :key="anime.id" :anime="anime"> -->
          <!-- <div class="anime-item">
              <router-link :to="'/anime/' + anime.id">
                <img
                  alt=""
                  class="rounded-md w-72 my-5 anime-cover"
                  :src="anime.coverImage.extraLarge"
                />
                <div class="capitalize anime-name w-full">
                  {{ anime.title.romaji }}
                </div>
              </router-link>
            </div> -->
          <AnimeSubSection v-for="anime in list" :key="anime.id" :anime="anime">
          </AnimeSubSection>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnimeSubSection from "../home/AnimeSubSection.vue";
export default {
  name: "search-content",
  props: {},
  data() {
    return {
      list: [],
    };
  },
  components: { AnimeSubSection },
  created() {
    var sectionId = this.$route.params.sectionId;
    const mapping = {
      trending: "sort: TRENDING_DESC",
      "this-season": "season: SPRING, seasonYear: 2022, sort: POPULARITY_DESC",
      "next-season": "season: SUMMER, seasonYear: 2022, sort: POPULARITY_DESC",
      "all-time": "sort: POPULARITY_DESC",
      top: "sort: SCORE_DESC",
    };
    if (
      mapping[sectionId] != undefined &&
      this.$route.query.searchValue != ""
    ) {
      var query =
        `query {
  Page(page: 1, perPage: 100) {
    media(type: ANIME, ` +
        mapping[sectionId] +
        `) {
      id
      title {
        romaji
      }
      status
      description
      coverImage {
        extraLarge
      }
      season
      seasonYear
      trending
      nextAiringEpisode {
        episode
        timeUntilAiring
      }
      studios(sort: FAVOURITES_DESC) {
        nodes {
          name
        }
      }
      format
      meanScore
      genres
    }
  }
}`;
      var url = "https://graphql.anilist.co",
        options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: query,
          }),
        };
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          this.list = data?.data?.Page?.media;
        });
    } else if (this.$route.query.searchValue == "") {
      this.$router.push("/home");
    }
  },
  updated() {
    if (
      this.$route.query.searchValue != undefined &&
      this.$route.query.searchValue != ""
    ) {
      var query =
        `query {
  Page(page: 1, perPage: 50) {
    media(type: ANIME, search: "` +
        this.$route.query.searchValue +
        `") {
      id
      title {
        romaji
      }
      status
      description
      coverImage {
        extraLarge
      }
      season
      seasonYear
      trending
    }
  }
}`;
      var url = "https://graphql.anilist.co",
        options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: query,
          }),
        };
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          this.list = data?.data?.Page?.media;
        });
    } else if (this.$route.query.searchValue == "") {
      this.$router.push("/home");
    }
  },
};
</script>

<style>
.search__container {
  max-width: 1200px;
  width: 100%;
}
</style>
