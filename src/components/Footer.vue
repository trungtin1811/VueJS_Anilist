<template>
  <footer id="footer">
    <div class="flex w-full justify-evenly py-20">
      <div class="footer__themes">
        <p class="text theme-text">Site theme</p>
      </div>
      <div class="footer__list flex-row flex space-x-28 text-2xl">
        <ul class="footer__list__donate list-text space-y-7">
          <li><a href="#">Donate</a></li>
          <li><a href="#">Aniast.co</a></li>
          <li><a href="#">AniChart.net</a></li>
        </ul>
        <ul class="footer__ast__apps list-text space-y-7">
          <li><a href="#">App</a></li>
          <li><a href="#">Site Stats</a></li>
          <li><a href="#">Recommendations</a></li>
          <li><a href="#">API</a></li>
        </ul>
        <ul class="footer__ast__socials list-text space-y-7">
          <li><a href="#">Discord</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">GitHub</a></li>
        </ul>
        <ul class="footer__ast__more list-text space-y-7">
          <li><a href="#">Ad Data</a></li>
          <li><a href="#">Moderators</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Term & Privacy</a></li>
          <li><a href="#">Site Map</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "comp-footer",
  data() {
    return {};
  },
};
</script>

<style>
footer {
  background-color: #11161d;
  font-size: 1.4rem;
}
.theme-text {
  color: #3db4f2;
  font-size: 1.6rem;
}
.list-text {
  color: #a0b1c5;
  font-weight: 600;
}
.list-text li a:hover {
  color: rgb(18, 172, 253);
}
</style>
