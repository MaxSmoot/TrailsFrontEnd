<template>
  <div>
    <ul>
      <li v-for="post in loadedPosts" :key="post">
        <postTemplate
          :username="post.Username"
          :uuid="post.id"
          :body="post.body"
          :timestamp="post.timestamp"
        ></postTemplate>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '@/store/index';
import postTemplate from './post-template.vue';

import { computed, defineComponent, onBeforeMount } from 'vue';
export default defineComponent({
  components: {
    postTemplate
  },
  setup() {
    const loadedPosts = computed(() => store.getters.posts);
    /**
     * @todo implement error popup
     */
    onBeforeMount(async () => {
      try {
        await store.dispatch('getPosts');
      } catch (e) {
        alert(e.message);
      }
    });

    return { loadedPosts };
  }
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

</style>
