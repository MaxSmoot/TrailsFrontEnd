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
import { defineComponent, onBeforeMount } from "vue";
import store from "./store/index";
import router from './router/index'

export default defineComponent({
  setup() {
    onBeforeMount(async () => {
      await store.dispatch("getToken");
      if (store.getters.isAuthenticated){
        router.push("Home")
      }
    });
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
