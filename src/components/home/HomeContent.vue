<template>
  <div id="content" class="flex justify-center">
    <div class="content-container">
      <MainFilter />
      <router-view />
    </div>
  </div>
</template>

<script>
import MainFilter from "../Filter.vue";
export default {
  name: "comp-content",
  components: {
    MainFilter,
  },
  data() {
    return {
      list: {},
    };
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
