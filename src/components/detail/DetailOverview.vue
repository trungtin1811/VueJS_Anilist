<template>
  <div id="detail-subcontent" class="">
    <div class="relations">
      <div class="text-2xl my-4">Relations</div>
      <div class="flex flex-wrap -mx-4 justify-start">
        <div v-for="relationsItem in relationsList" :key="relationsItem.id">
          <div class="relations__item mx-4 my-4">
            <router-link :to="'/anime/' + relationsItem.id"
              ><img
                :src="relationsItem.coverImage.extraLarge"
                class="relations__item-img"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="characters">
      <div class="text-2xl my-4">Characters</div>
      <!-- <div class="flex flex-wrap -mx-4 justify-between">
        <div v-for="character in charactersList" :key="character.id">
          <div class="characters__item mx-4 my-4 flex space-x-2">
            <div class="flex">
              <a href="#"
                ><img
                  :src="character.node.image.large"
                  class="characters__item-img"
              /></a>
              <a
                class="flex flex-col justify-around mx-4 items-start text-lg w-36"
                ><div>{{ character.node.name.userPreferred }}</div>
                <div>Main</div></a
              >
            </div>
            <div class="flex">
              <a
                href="#"
                class="flex flex-col justify-around mx-4 items-end text-lg w-36"
                ><div>{{ character.voiceActors[0].name.userPreferred }}</div>
                <div>Japanese</div></a
              >
              <a href="#"
                ><img
                  :src="character.voiceActors[0].image.large"
                  class="characters__item-img"
              /></a>
            </div>
          </div>
        </div>
      </div> -->
      <DetailCharacters :charactersList="oCharactersList" />
    </div>
    <div class="staffs">
      <div class="text-2xl my-4">Staffs</div>
      <div class="flex flex-wrap -mx-4 justify-between">
        <div v-for="staff in staffsList" :key="staff.node.id">
          <div class="staffs__item mx-4 my-4">
            <div class="flex">
              <a href="#"
                ><img :src="staff.node.image.large" class="staffs__item-img"
              /></a>
              <a class="flex flex-col justify-around mx-4 items-start text-lg"
                ><div>{{ staff.node.name.userPreferred }}</div>
                <div>{{ staff.role }}</div></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="oEpisodesList.length != 0">
      <div class="watch">
        <div class="text-2xl my-4">Watch</div>
        <!-- <div class="flex flex-wrap -mx-4 justify-between">
          <div v-for="(ep, index) in oEpisodesList" :key="index">
            <div class="watch__item mx-4 my-4 relative">
              <a :href="ep.url"
                ><img :src="ep.thumbnail" class="watch__item-img"
              /></a>
              <div
                class="watch__item__title w-full -mt-11 absolute bottom-0 text-white text-left opacity-70 p-4 font-normal overflow-ellipsis overflow-hidden"
              >
                {{ ep.title }}
              </div>
            </div>
          </div>
        </div> -->
        <DetailWatch :episodesList="oEpisodesList" />
      </div>
    </div>
  </div>
</template>

<script>
import DetailWatch from "./DetailWatch.vue";
import DetailCharacters from "./DetailCharacters.vue";
export default {
  name: "detail-overview",
  props: {
    relationsList: Object,
    oCharactersList: Object,
    staffsList: Object,
    oEpisodesList: Object,
  },
  data() {
    return {};
  },
  components: {
    DetailWatch,
    DetailCharacters,
  },
};
</script>

<style>
.relations__item-img {
  width: 76px;
  height: 100px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
#detail-subcontent {
  max-width: 720px;
}
.staffs__item-img,
.characters__item-img {
  width: 60px;
  height: 80px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.staffs__item,
.characters__item {
  background-color: rgb(251, 251, 251);
}
.watch__item-img {
  width: 164px;
  height: 88px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.characters__item,
.staffs__item {
  width: 344px;
}
.watch__item__title {
  background-color: rgb(31, 38, 49);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
