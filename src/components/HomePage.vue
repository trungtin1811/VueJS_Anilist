<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Content from "./home/HomeContent.vue";
export default {
  name: "home-page",
  components: {
    Header,
    Footer,
    Content,
  },
};
</script>

<style></style>
