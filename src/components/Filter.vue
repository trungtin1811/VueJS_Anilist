<template>
  <div class="flex items-end space-x-8 justify-between">
    <div class="flex space-x-1 justify-between w-5/6 items-end">
      <div class="text-2xl">
        <div class="mb-5">Search</div>
        <div class="input-box flex items-center h-15">
          <i class="bx bx-search-alt-2 bx-sm font-semibold"></i>
          <input type="text" v-model="searchValue" class="search" />
        </div>
      </div>

      <div class="text-2xl cursor-pointer">
        <div class="mb-5">Genres</div>
        <div class="input-box flex items-center h-15 shadow-md">
          <input type="text" class="search" value="Any" readonly />
          <i class="bx bx-chevron-down bx-md"></i>
        </div>
      </div>
      <div class="text-2xl cursor-pointer">
        <div class="mb-5">Year</div>
        <div class="input-box flex items-center h-15 shadow-md">
          <input type="text" class="search" value="Any" readonly />
          <i class="bx bx-chevron-down bx-md"></i>
        </div>
      </div>
      <div class="text-2xl cursor-pointer">
        <div class="mb-5">Season</div>
        <div class="input-box flex items-center h-15 shadow-md">
          <input type="text" class="search" value="Any" readonly />
          <i class="bx bx-chevron-down bx-md"></i>
        </div>
      </div>
      <div class="text-2xl cursor-pointer">
        <div class="mb-5">Format</div>
        <div class="input-box flex items-center h-15 shadow-md">
          <input type="text" class="search" value="Any" readonly />
          <i class="bx bx-chevron-down bx-md"></i>
        </div>
      </div>
    </div>
    <div class="filter-icon cursor-pointer">
      <i class="bx bx-filter bx-md"></i>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "body-filter",
  data() {
    return {
      searchValue: "",
    };
  },
  updated() {
    this.$router.push({
      path: "/search",
      query: { searchValue: this.searchValue },
    });
    console.log("/search/" + this.searchValue);
  },
};
</script>

<style>
.input-box,
.filter-icon {
  background: rgb(251, 251, 251);
  border-radius: 6px;
  box-shadow: 0 14px 30px rgba(var(--color-shadow-blue), 0.1),
    0 4px 4px rgba(var(--color-shadow-blue), 0.04);
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  grid-gap: 10px;
  grid-template-columns: 13px auto 13px;
  letter-spacing: 0.03rem;
  padding: 11px 16px;
  padding-left: 13px;
  max-width: 170px;
}
.input-box input {
  background: 0 0;
  max-width: 120px;
}
.input-box input:focus {
  outline-width: 0;
}
</style>
