<template>
  <div id="post">
    <img
      v-if="store.getters.userInfo.Username == username"
      id="options"
      src="@/assets/ellipsis.svg"
      @click="showMenu = !showMenu"
    />
    <h3>{{ username }}</h3>
    <p>{{ body }}</p>
    <div v-show="showMenu" id="optionsMenu">
      <p id="deletePost"><b>Delete Post</b></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import store from '@/store/index';
import axios from '@/axios';
export default defineComponent({
  props: {
    username: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    timestamp: {
      type: String,
      required: true
    }
  },
  setup() {
    const showMenu = ref(false);
    return { store, showMenu };
  }
});
</script>
<style scoped lang="scss">
#post {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#options {
  position: absolute;
  bottom: 3.5rem;
  padding: 0;
  right: -1rem;
  margin: 0;
  width: 2.5rem;
}
#optionsMenu {
  display: block;
  position: absolute;
  top: 0rem;
  right: 1rem;
  background-color: white;
  box-shadow: 0px 0px 5px 0px #c6c6c6;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.4rem;
}
#optionsMenu:hover {
  background-color: rgba(0, 0, 0, 0.021);
}
</style>
