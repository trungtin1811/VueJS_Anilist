<template>
  <div>
    <AnimeSection
      :sectionId="'trending'"
      :sectionName="'trending now'"
      :list="list1"
    />
    <AnimeSection
      :sectionId="'this-season'"
      :sectionName="'popular this season'"
      :list="list2"
    />
    <AnimeSection
      :sectionId="'next-season'"
      :sectionName="'upcoming next season'"
      :list="list3"
    />
    <AnimeSection
      :sectionId="'all-time'"
      :sectionName="'all time popular'"
      :list="list4"
    />
    <TopAnime :sectionId="'top'" :sectionName="'top 100 anime'" :list="list5" />
  </div>
</template>

<script>
import AnimeSection from "./AnimeSection.vue";
import TopAnime from "./TopAnime.vue";
import { ref } from "vue";
export default {
  name: "comp-content-anime",
  components: {
    AnimeSection,
    TopAnime,
  },
  setup() {
    var url = "https://graphql.anilist.co";
    var listQuery = [
      {
        id: "trending",
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `query {
  Page(page: 1, perPage: 5) {
    media(type: ANIME, sort: TRENDING_DESC) {
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
}`,
          }),
        },
      },
      {
        id: "thisSeason",
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `query{
  Page(page: 1, perPage: 5) {
    media(type: ANIME, season: SPRING, seasonYear: 2022, sort: POPULARITY_DESC) {
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
}`,
          }),
        },
      },
      {
        id: "nextSeason",
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `query{
    Page(page: 1, perPage: 5) {
      media(type: ANIME, season: SUMMER, seasonYear: 2022, sort: POPULARITY_DESC) {
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
  }`,
          }),
        },
      },
      {
        id: "allTime",
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `query{
    Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: POPULARITY_DESC) {
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
  }`,
          }),
        },
      },
      {
        id: "allTime",
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `query {
  Page(page: 1, perPage: 10) {
    media(type: ANIME, sort: SCORE_DESC) {
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
      popularity
      season
      status
      duration
      seasonYear
      episodes
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
}

  `,
          }),
        },
      },
    ];
    const list = [ref(), ref(), ref(), ref(), ref()];
    for (let i = 0; i < list.length; i++) {
      fetch(url, listQuery[i].options)
        .then((response) => response.json())
        .then((data) => {
          list[i].value = data?.data?.Page?.media;
        });
    }
    var [list1, list2, list3, list4, list5] = list;
    console.log(list);
    return { list1, list2, list3, list4, list5 };
  },
};
</script>

<style>
#content {
  padding: 100px 188px;
  background-color: rgb(229, 235, 241);
}
.content-container {
  max-width: 1200px;
  width: 100%;
}
.section-title {
  font-weight: 700 !important;
}
</style>
