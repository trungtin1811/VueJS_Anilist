<template>
  <div class="characters">
    <div class="flex flex-wrap -mx-4 justify-between">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-character",
  props: {
    charactersList: Object,
  },
};
</script>

<style></style>
