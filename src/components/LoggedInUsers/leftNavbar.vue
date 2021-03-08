<template>
  <div id="leftNavbarWrapper">
    <ul>
      <li :class="{ currentPage: route.name == 'Home' }">
        <router-link
          to="/home"
        >
          <span class="icon-home" /><b class="navWord">Home</b>
        </router-link>
      </li>
      <li :class="{ currentPage: route.name == 'Explore' }">
        <router-link
          to="/explore"
        >
          <span class="icon-explore" /><b class="navWord">Explore</b>
        </router-link>
      </li>
      <li :class="{ currentPage: route.name == 'Circles' }">
        <router-link
          to="/circles"
        >
          <span class="icon-circles" /><b class="navWord">Circles</b>
        </router-link>
      </li>
      <li :class="{ currentPage: route.name == 'Pages' }">
        <router-link
          to="/pages"
        >
          <span class="icon-pages" /><b class="navWord">Pages</b>
        </router-link>
      </li>
      <li :class="{ currentPage: route.name == 'Profile' }">
        <router-link
          to="/profile"
        >
          <span class="icon-profile" /><b class="navWord">Profile</b>
        </router-link>
      </li>
      <li class="postSVG">
        <span
          id="writePostIcon"
          class="icon-pen"
          @click="showPost"
        />
      </li>
      <li>
        <button
          class="navWord"
          id="holler"
          type="button"
          @click="showPost"
        >
          Holler'
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name: "LeftNavbar",
  emits: ['show-post'],
  setup(_props, { emit }) {
    const route = useRoute();

    /**
     * tell the parent when the close button has been hit
     */
    function showPost() {
      emit("show-post");
    }
    return {
      showPost,
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./../../assets/leftNavbarIcons/style.css";
@import "../../styles/variables.scss";
#leftNavbarWrapper {
  display: inline-block;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
}
#leftNavbarWrapper::-webkit-scrollbar {
  display: none;
}
ul {
  width: 100%;
  margin: 0;
  padding: 0;
  margin-right: 1rem;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
li {
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  font-size: 2rem;
  margin-top: 8vh;
  a {
    text-decoration: none;
    color: black;
  }
}

#holler {
  border: none;
  outline: none;
  background-color: $primary_color;
  color: white;
  font-size: 1.5rem;
  border-radius: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  cursor: pointer;
}
#holler:hover {
  background-color: $primary_color_hover;
}
.currentPage a {
  color: $primary_color;
}

@media screen and (max-width: 815px) {
  .navWord {
    display: none;
  }
  li {
    text-align: center;
  }
}
@media screen and (min-width: 815px) {
  li {
    text-align: left;
  }
  li a {
    padding-left: 1rem;
  }
  .postSVG {
    display: none;
  }
}
#writePostIcon {
  color: $primary_color;
}
</style>
