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
import { defineComponent, watch } from "vue";
import useAuth from "./auth/useAuth";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const user = useAuth();
    const route = useRouter();
    watch(user, () => {
      if (!user.token) {
        route.push("FrontPage");
      } else {
        route.push("Home");
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
