<template>
  <pageTemplate>
    <input
      id="searchTrails"
      type="search"
      name="searchTrails"
      placeholder="Search Trails"
    >
  </pageTemplate>
</template>

<script lang="ts">
import pageTemplate from '../../components/LoggedInUsers/pageTemplate.vue';
import { defineComponent } from "vue";
export default defineComponent({
  name: "Explore",
  components: {
    pageTemplate,
  },
  setup() {
    return {
      pageTemplate,
    };
  },
});
</script>
