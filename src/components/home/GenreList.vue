<template>
  <span
    class="anime-type text-white bg-red-400 px-4 py-2 font-bold rounded-3xl"
  >
    {{ genre }}
  </span>
</template>

<script>
export default {
  name: "genre-list",
  props: {
    genre: String,
  },
};
</script>

<style></style>
