<template>
  <div>
    <ul>
      <li v-for="post in posts" v-bind:key="post">
        <p><b>John Smith</b></p>
        {{ post.body }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useLoadPosts from "./compositions/use-LoadPosts";
export default defineComponent({
  setup() {
    //load posts from the server
    const { posts } = useLoadPosts();

    return {
      posts,
    };
  },
});
</script>
<style scoped>
ul {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
}
li {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
li:hover {
  background-color: rgba(0, 0, 0, 0.021);
}
</style>
