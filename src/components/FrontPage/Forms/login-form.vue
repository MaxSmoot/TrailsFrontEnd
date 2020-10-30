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

export default {
  name: "login-form",
  data() {
    return {
      email: "",
      password: "",
      loggedIn: useLogin(),
    };
  },
  computed: {
    /**
     * Validate the Email input - can be accessed in variable validEmail (NOT by calling the function)
     * @return {Boolean} Whether or not the Email input is valid
     */
    validEmail() {
      return validate("email", this.email);
    },
    /**
     * Validate the Password input - can be accessed in variable validPassword (NOT by calling the function)
     * @return {Boolean} Whether or not the Password input is valid
     */
    validPassword() {
      return this.password.length > 0;
    },
    /**
     * Validate the Entire Form  - can be accessed in variable validForm (NOT by calling the function)
     * @return {Boolean} Whether or not the entire form is valid
     */
    validForm() {
      return this.validEmail && this.validPassword;
    },
  },
  methods: {
    /**
     * Handles the Form submission
     * @todo implement communication with the server
     */
    onSubmit() {
      this.loggedIn = true;
      this.$router.push({ name: "Home" });
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang='scss' scoped>
    @import '../../../styles/forms.scss';
</style>