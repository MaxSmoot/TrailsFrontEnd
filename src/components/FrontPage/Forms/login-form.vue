<template>
  <div id="wrapper">
    <!-- Using the shared forms.css -->
    <form
      class="form"
      @submit.prevent="onSubmit"
    >
      <img
        class="x"
        src="../../../assets/x.svg"
        @click="close"
      >
      <h2>Login</h2>
      <h3
        v-if="loggedIn == 500"
        class="error"
      >
        Server Error
      </h3>
      <h3
        v-if="loggedIn == 401"
        class="error"
      >
        Incorrect Email or Password
      </h3>
      <p>
        <input
          id="email"
          v-model.trim="email"
          placeholder="Email"
          type="email"
          class="formInput"
        >
      </p>
      <p>
        <input
          id="password"
          v-model.trim="password"
          placeholder="Password"
          type="password"
          class="formInput"
        >
      </p>
      <p id="staySignedInWrapper">
        Remember Me <input
          v-model="rememberMe"
          type="checkbox"
          name="staySignedIn"
          class="staySignedIn"
        >
      </p>

      <button
        type="submit"
        :disabled="!validForm"
        :class="{ disabled: !validForm }"
      >
        Login
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { validate } from "../../Forms/HelperModules/validation";
import { defineComponent, ref, computed } from "vue";
import store from "@/store";
export default defineComponent({
  name: "LoginForm",
  emits: ['close'],
  setup(__props, { emit }) {
    const rememberMe = ref<boolean>(false);
    const loggedIn = ref();
    const email = ref("");
    const password = ref("");
    const validEmail = computed(() => validate("email", email.value));
    const validPassword = computed(() => password.value.length > 0);
    const validForm = computed(() => validPassword.value && validEmail.value);
    /**
     * @todo implement fetch to server and user auth
     * for now it just sets the global state as if the user was logged in
     */
    async function onSubmit() {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
          rememberMe: rememberMe.value
        });
      } catch (err) {
        console.log(err);
        loggedIn.value = err.status;
      }
    }

    function close() {
      emit("close");
    }

    return {
      email,
      password,
      validEmail,
      validPassword,
      validForm,
      close,
      onSubmit,
      loggedIn,
      rememberMe
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../../styles/forms.scss";
</style>
