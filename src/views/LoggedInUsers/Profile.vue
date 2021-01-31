<template>
  <pageTemplate>
    <p id="name">{{userInfo.FName}} {{userInfo.LName}}</p>
    <p id="userName">@{{userInfo.Username}}</p>
    <button @click="logout">Logout</button>
  </pageTemplate>
</template>

<script lang="ts">
import pageTemplate from "../../components/LoggedInUsers/pageTemplate.vue";
import store from "../../store/index";
import { computed, defineComponent, onMounted } from "vue";
import { userData } from "@/types";
export default defineComponent({
  name: "Profile",
  components: {
    pageTemplate,
  },
  setup() {
    onMounted(async ()=>{
      store.dispatch("getUserInfo");
    });
    const userInfo = computed(()=>store.getters.userInfo as userData);
    async function logout() {
      try {
        store.dispatch("logout");
      } catch (err) {
        alert(err);
      }
    }
    return {
      pageTemplate,
      logout,
      userInfo,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./../../styles/variables.scss";
button {
  margin-top: 1rem;
  background-color: $primary_color;
  outline: none;
  border: none;
  border-radius: 1rem;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: $primary_color_hover;
  }
}
</style>
