<template>
  <div>
    <ul>
      <li v-for="post in loadedPosts" v-bind:key="post">
        <p>
          <b>{{ post.Username }}</b>
        </p>
        {{ post.body }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from "@/store/index";
import { computed, defineComponent, onBeforeMount } from "vue";
export default defineComponent({
  setup() {
    const loadedPosts = computed(() => store.getters.posts);
    onBeforeMount(async () => {
      store.dispatch("getPosts");
    });

    return { loadedPosts };
  },
});
</script>
<style scoped lang="scss">
ul {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
}
li {
  margin: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  overflow-wrap: break-word;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.021);
}
</style>
