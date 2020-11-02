<template>
  <div id="wrapper">
    <!-- Using the shared forms.css -->
    <form @submit.prevent="onSubmit" class="form">
      <img class="x" src="../../../assets/x.svg" @click="close" />
      <h2>Login</h2>
      <p>
        <input
          placeholder="Email"
          type="email"
          id="email"
          v-model.trim="email"
          :class="{ invalid: !validEmail, valid: validEmail }"
        />
      </p>
      <p>
        <input
          placeholder="Password"
          type="password"
          id="password"
          v-model.trim="password"
          :class="{ invalid: !validPassword, valid: validPassword }"
        />
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
<script>
import { validate } from "../../Forms/HelperModules/validation";
import useLogin from "../../../auth/useLogin";
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "login-form",
  setup(props, { emit }) {
    const route = useRouter();
    const email = ref("");
    const password = ref("");
    const loggedIn = useLogin();
    const validEmail = computed(() => validate("email", email.value));
    const validPassword = computed(() => password.value.length > 0);
    const validForm = computed(() => validPassword.value && validEmail.value);
    /**
     * @todo implement fetch to server and user auth
     * for now it just sets the global state as if the user was logged in
     */
    function onSubmit() {
      loggedIn.value = true;
      route.push({ name: "Home" });
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
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../../styles/forms.scss";
</style>
