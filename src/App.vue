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
    //Automatically Login in user who has valid refresh token
    onBeforeMount(async () => {
      await store.dispatch("getToken");
      if (store.getters.isAuthenticated){
        //fetch user info if successful login
        store.dispatch("getUserInfo")
        router.push("home")
      }
    });
  },
});
</script>

<style lang="scss">
body {
  min-height: 100%;
  overflow: hidden;
  position: absolute;
  width:100%;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  background: transparent;
}
h1 {
  font-weight: 400;
}
</style>
