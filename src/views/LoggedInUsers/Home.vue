<template>
  <div id="homeWrapper">
    <page-template>
      <write-post style="margin-bottom: 1rem" />
      <posts />
    </page-template>
  </div>
</template>
<script>
import writePost from "../../components/LoggedInUsers/Home/writePost.vue";
import pageTemplate from "../../components/LoggedInUsers/pageTemplate.vue";
import posts from "../../components/LoggedInUsers/Home/posts.vue";
export default {
  name: "Home",
  components: {
    writePost,
    pageTemplate,
    posts,
  },
  setup() {
    return {
      writePost,
      pageTemplate,
      posts,
    };
  },
};
</script>