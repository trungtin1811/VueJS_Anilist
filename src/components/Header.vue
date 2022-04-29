<template>
  <header id="header">
    <nav class="border-gray-200 px-2 py-4 rounded">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <router-link to="/home" class="items-center">
          <img
            src="../assets/img/icon.svg"
            class="mr-3 logo pl-48"
            alt="Anilist"
          />
        </router-link>
        <div class="flex items-center flex-grow justify-evenly ml-32 space-x-8">
          <div class="flex md:order-2 items-center">
            <a
              href="#"
              class="font-medium space-x-10 mr-5 block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text"
              >Login</a
            >
            <button
              type="button"
              class="sign-up-btn text-white bg-blue-700 font-medium rounded-lg px-6 py-4 text-center mr-40"
            >
              Sign Up
            </button>
          </div>
          <div
            class="hidden justify-center items-center w-full md:flex md:w-auto md:order-1"
            id="desk-menu"
          >
            <ul
              class="flex flex-col mt-4 md:flex-row md:space-x-12 md:mt-0 md:font-medium"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text"
                  >Browse</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text"
                  >Social</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text"
                  >Forum</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "comp-header",
};
window.onwheel = (e) => {
  if (e.deltaY >= 0) {
    document.querySelector("#header").classList.add("hide");
  } else {
    if (document.querySelector("#anime-detail") != null) {
      if (document.querySelector("html,body").scrollTop <= 200) {
        document.querySelector("#header").classList.add("fade");
      } else {
        document.querySelector("#header").classList.remove("fade");
      }
    } else {
      document.querySelector("#header").classList.remove("fade");
    }
    document.querySelector("#header").classList.remove("hide");
  }
};
</script>

<style>
#header {
  position: fixed;
  width: 100%;
  transition: top 0.5s, opacity 0.5s;
  z-index: 999;
  top: 0;
  opacity: 1;
}
.hide {
  top: -90px !important;
}
.fade {
  opacity: 0.7 !important;
}
#header:hover {
  opacity: 1 !important;
}
nav {
  background-color: #2b2d42;
  font-size: 1.4rem;
}
.text {
  color: #bcbedc;
  font-weight: 600;
}
.text:hover {
  color: #d3d5f3;
}
.logo {
  height: 50px;
}
.sign-up-btn:hover {
  box-shadow: 0 2px 10px rgb(8 150 230 / 60%);
  transform: scale(1.03);
  color: white;
}
</style>
