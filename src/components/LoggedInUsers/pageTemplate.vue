<template>
  <div id="homeWrapper">
    <div id="newPostPopUp" v-if="showNewPost">
      <div id="writePost">
        <writePost @close="toggleNewPost" :showX="true" />
      </div>
    </div>
    <div id="left" v-if="true">
      <leftNavbar v-if="true" @show-post="toggleNewPost" />
    </div>
    <div id="center" v-if="true">
      <div id="currentPage">
        <h1>{{ currentPage.name }}</h1>
      </div>
      <div id="center-content">
        <slot />
      </div>
    </div>
    <div id="right"></div>
  </div>
</template>
<script lang="ts">
import writePost from "./Home/writePost.vue";
import leftNavbar from "./leftNavbar.vue";
import { ref, defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "pageTemplate",
  components: {
    writePost,
    leftNavbar,
  },
  setup() {
    //keep track of when to show the popup new post form
    const showNewPost = ref(false);
    //get the current page name to display at the top of the screen
    const currentPage = useRoute();
    /**
     * toggle the visibility of the new post popup via the showNewPost variable
     */
    function toggleNewPost() {
      if (showNewPost.value) showNewPost.value = false;
      else showNewPost.value = true;
    }
    return {
      toggleNewPost,
      showNewPost,
      currentPage,
    };
  },
});
</script>
<style scoped>
* {
  box-sizing: border-box;
}
#homeWrapper {
  display: flex;
  overflow: auto;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: stretch;
  flex-grow: 1;
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
  top:0;
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
  #right {
    display: none;
  }
  #center {
    width: calc(100vw - 3rem);
    margin-left: auto;
  }
  #currentPage {
    width: calc(100vw - 3rem);
    margin-left: auto;
  }
  #left {
    width: 3rem;
  }
  #writePost {
    width: 95%;
  }
}
@media screen and (min-width: 815px) {
  #right {
    min-width: 30%;
  }
  #center {
    width: 40%;
  }
  #writePost {
    width: 50%;
  }
  #left {
    min-width: 30%;
  }
}
</style>
