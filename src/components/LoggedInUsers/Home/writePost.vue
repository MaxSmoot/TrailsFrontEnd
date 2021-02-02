<template>
  <div id="wrapper">
    <form id="form" @submit.prevent="">
      <img v-if="showX" class="x" @click="close" src="../../../assets/x.svg" />
      <textarea
        ref="TEXT_AREA"
        v-model="CONTENT"
        @input="assertMaxLength"
        placeholder="What's on your mind?"
      ></textarea>
      <label
        id="count"
        :class="{ red: CONTENT.length == MAX_LENGTH }"
        for="textarea"
        >{{ CONTENT.length }}</label
      >
      <button
        @click="createPost"
        :disabled="CONTENT.length == 0"
        :class="{ disabled: CONTENT.length == 0 }"
        type="submit"
      >
        Holler'
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, watch, defineComponent } from "vue";
import store from "@/store/index";
import axios from "@/axios";
export default defineComponent({
  props: {
    showX: Boolean,
  },
  setup(__props, { emit }) {
    const MAX_LENGTH = 255;
    const CONTENT = ref("");
    const TEXT_AREA = ref();
    watch(CONTENT, () => {
      TEXT_AREA.value.style.height = "auto";
      TEXT_AREA.value.style.height = TEXT_AREA.value.scrollHeight + "px";
    });
    function assertMaxLength() {
      if (CONTENT.value.length >= MAX_LENGTH) {
        CONTENT.value = CONTENT.value.substring(0, MAX_LENGTH);
      }
    }

    function close() {
      emit("close");
    }

    async function createPost() {
      try {
        await axios.post("/authenticated/post", {
          postBody: CONTENT.value,
        });
        CONTENT.value = "";
        store.dispatch("getPosts");
        close();
      } catch (err) {
        console.log("You have been logged out");
      }
    }
    return {
      TEXT_AREA,
      CONTENT,
      assertMaxLength,
      MAX_LENGTH,
      close,
      createPost,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./../../../styles/variables.scss";
textarea {
  font-family: "Roboto", sans-serif;
  border: none;
  outline: none;
  display: block;
  margin: auto;
  margin-left: 2rem;
  margin-top: 1rem;
  width: 85%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0);
  color: black;
  font-size: 1.5rem;
  resize: none;
  overflow: hidden;
}
::placeholder {
  color: black;
}
button {
  cursor: pointer;
  outline-width: 0;
  border-radius: 2rem;
  float: right;
  clear: right;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: none;
  color: white;
  padding: 0.5em 1.2em;
  font-size: 1.2rem;
  background-color: $primary_color;
}
button:hover {
  background-color: $primary_color_hover;
}
#count {
  font-size: 0.9rem;
  margin-top: 1rem;
  margin-left: 2rem;
  margin-bottom: 0;
  float: left;
  opacity: 0.8;
  clear: left;
}

form {
  overflow: hidden;
  /* width: 100%; */
  background-color: white;
  /* border-radius: .4rem; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: none;
  border-right: none;
}
.x {
  opacity: 0.3;
  cursor: pointer;
  float: right;
  width: 1rem;
  height: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
}
</style>
