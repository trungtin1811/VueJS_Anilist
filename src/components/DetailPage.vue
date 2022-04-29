<template>
  <div id="detail-page">
    <Header />
    <Detail />
    <Footer />
  </div>
</template>

<script>
import Detail from "./detail/DetailContent.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "detail-page",

  data() {
    return {};
  },
  components: {
    Detail,
    Header,
    Footer,
  },
};
</script>

<style></style>
