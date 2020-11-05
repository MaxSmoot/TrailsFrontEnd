<template>
  <pageTemplate>
    <h1>{{user.firstName}} {{user.lastName}}</h1>
    <h1>{{user.email}}</h1>
    <h1>{{user.phone}}</h1>
    <h1>@{{user.username}}</h1>
    <button @click='logout'>Logout</button>
  </pageTemplate>
</template>

<script lang="ts">
import pageTemplate from '../../components/LoggedInUsers/pageTemplate.vue';
import useAuth from './../../auth/useAuth';
import useLogout from './../../auth/useLogout';
import { defineComponent } from "vue";
export default defineComponent({
  name: "Profile",
  components: {
    pageTemplate,
  },
  setup() {
    const user = useAuth();
    async function logout() {
      console.log(await useLogout());
    }
    return {
      pageTemplate,
      user,
      logout
    };
  },
});
</script>
