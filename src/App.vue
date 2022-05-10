<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import "./assets/tailwind.css";
export default {
  name: "App",
};
</script>

<style>
html {
  font-size: 62.5%;
  line-height: 1.15;
}
* {
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 600;
}
</style>
