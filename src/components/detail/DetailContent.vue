<template>
  <div id="anime-detail">
    <div class="anime-detail__banner">
      <img :src="anime?.bannerImage" alt="" class="w-full" />
    </div>
    <div class="anime-detail__cover ml-96 relative">
      <img :src="coverImage" alt="" />
      <div
        class="anime-detail__buttons flex justify-evenly pt-4 w-full space-x-4"
      >
        <div
          class="add-to-list flex items-center cursor-pointer font-semibold text-2xl justify-center pl-5 rounded-lg"
        >
          Add to list
          <span class="add-to-list__arrow relative -right-9"
            ><i class="bx bx-chevron-down bx-md"></i
          ></span>
        </div>
        <div
          class="favorite flex items-center cursor-pointer rounded-lg px-4 content-center"
        >
          <i class="bx bxs-heart"></i>
        </div>
      </div>
    </div>
    <div class="shadow-lg">
      <div class="max-w-6xl anime-detail__header">
        <h1 class="anime-detail__header__title text-3xl mb-6">
          {{ title }}
        </h1>

        <div class="anime-detail__header__description">
          <p v-html="getDescription(550)" class="text-2xl font-normal"></p>
          <span
            class="description-length-toggle py-4 -mb-4 font-medium text-xl"
            @click="getFull"
          >
            Read more
          </span>
        </div>

        <div class="anime-detail__header__nav">
          <ul class="flex justify-evenly space-x-5 text-2xl mt-6 py-5">
            <router-link
              :to="'/anime/' + this.$route.params?.animeId + '/overview'"
            >
              <li class="font-normal">Overview</li></router-link
            >
            <div v-if="watch.length != 0">
              <router-link
                :to="'/anime/' + this.$route.params?.animeId + '/watch'"
              >
                <li class="font-normal">Watch</li></router-link
              >
            </div>
            <router-link
              :to="'/anime/' + this.$route.params?.animeId + '/characters'"
            >
              <li class="font-normal">Characters</li></router-link
            >
          </ul>
        </div>
      </div>
    </div>
    <div class="anime-detail__content flex px-96 py-14 space-x-20">
      <DetailSidebar />
      <div class="anime-detail__content__container">
        <router-view
          :relationsList="relations"
          :charactersList="characters"
          :oCharactersList="oCharacters"
          :staffsList="staffs"
          :episodesList="watch"
          :oEpisodesList="oWatch"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DetailSidebar from "./DetailSidebar.vue";
export default {
  name: "comp-detail",
  data() {
    return {
      anime: {},
      title: "",
      coverImage: "",
      description: "",
      isHide: true,
      relations: {},
      characters: {},
      oCharacters: {},
      staffs: {},
      watch: {},
      oWatch: {},
    };
  },
  components: {
    DetailSidebar,
  },
  created() {
    // var variables = {
    //   id: this.$route.params.animeId,
    // };
    console.log(this.$route.params?.animeId);
    var query =
      `query {
  Media(type: ANIME, id: ` +
      this.$route.params?.animeId +
      `) {
    id
    title {
      romaji
    }
    status
    description
    bannerImage
    coverImage {
      extraLarge
    }
    season
    seasonYear
    meanScore
    genres
    popularity
    format
    season
    status
    seasonYear
    episodes
    duration
    characters (sort: FAVOURITES_DESC) {
      edges {
        id
        node {
          id
          name {
            userPreferred
          }
          image {
            large
          }
        }
        voiceActors (language:JAPANESE, sort:FAVOURITES_DESC) {
          id
          name {
            userPreferred
          }
          image {
            large
          }
        }
        role
      }
    }
    relations {
      nodes {
        id
        title {
          romaji
        }
        coverImage {
          extraLarge
        }
      }
    }
    staff(sort: RELEVANCE, perPage: 4) {
      edges {
        node {
          id
          name {
            userPreferred
          }
          image {
            large
          }
        }
        role
      }
    }
    streamingEpisodes {
       title
       thumbnail
       url
     }
  }
}
`;
    var url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          // variables: variables,
        }),
      };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        this.anime = data?.data?.Media;
        this.title = data?.data?.Media?.title?.romaji;
        this.coverImage = data?.data?.Media?.coverImage?.extraLarge;
        this.description = data?.data?.Media?.description;
        this.relations = data?.data?.Media?.relations?.nodes;
        this.characters = data?.data?.Media?.characters?.edges;
        this.oCharacters = data?.data?.Media?.characters?.edges?.slice(0, 6);
        this.staffs = data?.data?.Media?.staff?.edges;
        this.watch = data?.data?.Media?.streamingEpisodes;
        this.oWatch = data?.data?.Media?.streamingEpisodes?.slice(0, 4);
      });
  },
  methods: {
    getDescription(len) {
      if (this.isHide) {
        if (this.description?.length > len) {
          document.querySelector(".description-length-toggle").style.display =
            "block";
          return this.description?.slice(0, len) + "...";
        }
      }
      return this.description;
    },
    getFull() {
      document.querySelector(".description-length-toggle").style.display =
        "none";
      this.isHide = false;
      document.querySelector(
        ".anime-detail__header__description"
      ).style.height = "fit-content";
      return this.description;
    },
  },
};
</script>

<style>
.anime-detail__banner {
  min-height: 300px;
}
.anime-detail {
  background-color: rgb(251, 251, 251);
}
.anime-detail__cover {
  margin-top: -120px;
  width: 220px;
}
.anime-detail__header {
  margin-top: -220px;
  margin-left: 490px;
}
.add-to-list {
  width: 200px;
  background: rgb(18, 172, 253);
  color: rgb(255, 255, 255);
  height: 35px;
  justify-content: center;
  line-height: 1.3rem;
}
.add-to-list__arrow {
  background: rgba(18, 172, 253, 0.8) !important;
}
.favorite {
  background: rgb(236, 41, 75);
  color: rgb(255, 255, 255);
  font-size: 1.8rem;
  font-weight: 800;
  height: 35px;
}
.anime-detail__buttons {
  flex-grow: 0.4;
}
.anime-detail__content {
  min-height: 1000px;
  background-color: rgb(229, 235, 241);
}
.anime-detail__header__description {
  height: 152px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: height 2s;
}
.description-length-toggle:hover {
  z-index: 99;
  opacity: 1;
  background: linear-gradient(
    rgba(255, 255, 255, 0.8) 20%,
    rgba(255, 255, 255, 1)
  );
}
.description-length-toggle {
  position: relative;
  color: rgb(81, 97, 112);
  cursor: pointer;
  opacity: 0;
  text-align: center;
  display: none;
  margin-top: -36px;
  z-index: 9;
}
.anime-detail__content__container {
  max-width: 720px;
}
</style>
