<template>
  <div id="wrapper">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap"
      rel="stylesheet"
    />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import store from "./store/index";

export default defineComponent({
  setup() {
    onMounted(() => {
      store.dispatch("getToken");
    });

    const route = useRouter();

    store.watch(
      (state, getters) => getters.isAuthenticated,
      (newValue, oldValue) => {
        if (newValue) {
          route.push("Home");
        } else {
          route.push("FrontPage");
        }
      }
    );
  },
});
</script>

<style lang="scss">
html {
  min-height: 100%;
}
body {
  position: absolute;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  background: transparent;
}
h1 {
  font-weight: 400;
}
</style>
