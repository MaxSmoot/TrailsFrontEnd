<template>
  <pageTemplate></pageTemplate>
</template>

<script lang="ts">
import pageTemplate from '../../components/LoggedInUsers/pageTemplate.vue';
import { defineComponent } from "vue";
export default defineComponent({
  name: "Circles",
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
