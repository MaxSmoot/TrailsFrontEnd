<template>
  <div id="homeWrapper">
    <div v-if="showNewPost" id="newPostPopUp">
      <div id="writePost">
        <writePost :show-x="true" @close="showNewPost = !showNewPost" />
      </div>
    </div>
    <div id="left">
      <leftNavbar @show-post="showNewPost = !showNewPost" />
    </div>
    <div id="center">
      <div id="currentPage">
        <h1>{{ currentPage.name }}</h1>
      </div>
      <div id="center-content">
        <slot />
      </div>
    </div>
    <div id="right" />
  </div>
</template>
<script lang="ts">
import writePost from './Home/writePost.vue';
import leftNavbar from './leftNavbar.vue';
import { ref, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'PageTemplate',
  components: {
    writePost,
    leftNavbar
  },
  setup() {
    //keep track of when to show the popup new post form
    const showNewPost = ref(false);
    //get the current page name to display at the top of the screen
    const currentPage = useRoute();

    return {
      showNewPost,
      currentPage
    };
  }
});
</script>
<style scoped>
* {
  box-sizing: border-box;
}
#homeWrapper {
  display: grid;
  overflow: auto;
}

#exit {
  opacity: 0.8;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 1rem;
  margin-right: 2rem;
  margin-bottom: 0;
  float: right;
  margin-right: 1rem;
  clear: right;
}
#makePost {
  width: 40%;
  height: 30%;
  cursor: pointer;
  position: fixed;
  bottom: 1rem;
  right: 0;
  margin-right: 1rem;
  z-index: 10;
}

#center {
  height: 100vh;
  cursor: pointer;
}
#left {
  position: sticky;
  top: 0;
  align-self: flex-start;
  text-align: right;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
#right {
  position: sticky;
  top: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
#newPostPopUp {
  position: fixed;
  z-index: 10;
  background-color: #0000005d;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#currentPage {
  position: sticky;
  top: 0;
  display: block;
  background-color: white;
  z-index: 1;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
#currentPage h1 {
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
}

@media screen and (max-width: 815px) {
  #homeWrapper {
    grid-template-columns: 12% 88%;
  }
}
@media screen and (min-width: 815px) {
  #writePost {
    width: 50%;
  }
  #homeWrapper {
    grid-template-columns: 30% 40% 30%;
  }
}
</style>
