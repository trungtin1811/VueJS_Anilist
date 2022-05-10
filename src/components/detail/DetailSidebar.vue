<template>
  <div class="side-bar flex flex-col space-y-6">
    <div class="ranking flex text-center items-center space-x-6 py-3 px-6">
      <i class="bx bxs-star text-xl"></i>
      <p class="text-xl font-medium">#27 Highest Rated All Time</p>
    </div>
    <div class="ranking flex text-center items-center space-x-6 py-3 px-6">
      <i class="bx bxs-heart text-red-500 text-xl"></i>
      <p class="text-xl font-medium">#24 Most Popular All Time</p>
    </div>
    <div class="ranking flex text-center items-center space-x-6 py-3 px-6">
      <ul class="text-left props-list">
        <li>
          <p>Airing</p>
          <p>Ep 1016: 4d 11h 58m</p>
        </li>
        <li>
          <p>Format</p>
          <p>TV</p>
        </li>
        <li>
          <p>Episode Duration</p>
          <p>24 mins</p>
        </li>
        <li>
          <p>Status</p>
          <p>Releasing</p>
        </li>
        <li>
          <p>Start Date</p>
          <p>Oct 20, 1999</p>
        </li>
        <li>
          <p>Season</p>
          <p>Fall 1999</p>
        </li>
        <li>
          <p>Average Score</p>
          <p>87%</p>
        </li>
        <li>
          <p>Mean Score</p>
          <p>86%</p>
        </li>
      </ul>
    </div>
    <div class="space-y-4">
      <p class="text-2xl">Tags</p>
      <div
        class="ranking flex text-xl text-center justify-between space-x-6 py-3 px-6"
      >
        <div>Pirate</div>
        <div>98%</div>
      </div>
      <div
        class="ranking flex text-xl text-center justify-between space-x-6 py-3 px-6"
      >
        <div>Pirate</div>
        <div>98%</div>
      </div>
      <div
        class="ranking flex text-xl text-center justify-between space-x-6 py-3 px-6"
      >
        <div>Pirate</div>
        <div>98%</div>
      </div>
      <div
        class="ranking flex text-xl text-center justify-between space-x-6 py-3 px-6"
      >
        <div>Pirate</div>
        <div>98%</div>
      </div>
      <div
        class="ranking flex text-xl text-center justify-between space-x-6 py-3 px-6"
      >
        <div>Pirate</div>
        <div>98%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-sidebar",
};
</script>

<style>
.ranking {
  background: rgb(251, 251, 251);
  border-radius: 3px;
  width: 100%;
}
.rank i {
  width: 10%;
}
.bxs-star {
  color: rgb(247, 191, 99);
}
.side-bar {
  width: 220px;
}
.props-list li p:last-child {
  font-weight: 400;
  margin: 8px 0;
}
.props-list li p {
  font-size: 1.3rem;
}
.props-list li {
  margin: 12px 0;
}
</style>
