<template>
  <div id="wrapper">
    <link
      href='https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet'
    />
    <router-view />
  </div>
</template>

<script lang='ts'>
import { defineComponent, watch } from "vue";
import useAuth from './auth/useAuth';
import {useRouter} from 'vue-router';

export default defineComponent({
  setup() {
    const user = useAuth();
    const route = useRouter();
    watch(user, () => {
      if (!user.token) {
        route.push('FrontPage');
      }
    })
  }
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
h1{
  font-weight: normal;
}
</style>
