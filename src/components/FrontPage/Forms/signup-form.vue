<template>
  <div id="wrapper">
    <form
      class="form"
      @submit.prevent
    >
      <img
        class="x"
        src="../../../assets/x.svg"
        @click="close"
      >
      <h2>Sign Up</h2>
      <pre
        v-if="error"
        class="error"
      >{{ errorMessage }}</pre>
      <p>
        <input
          id="emailbox"
          v-model.trim="email"
          type="email"
          placeholder="Email"
          class="formInput"
          :class="{invalid:!validEmail, valid:validEmail}"
        >
      </p>
      <button
        v-if="!emailEntered"
        type="button"
        :disabled="!validEmail"
        :class="{disabled:!validEmail}"
        @click="emailEntered = true"
      >
        Sign Up
      </button>
      <div
        v-if="emailEntered"
        id="fullForm"
      >
        <p>
          <input
            id="username"
            v-model.trim="username"
            type="text"
            placeholder="Username"
            class="formInput"
            :class="{invalid:!validUsername, valid:validUsername}"
          >
        </p>
        <p>
          <input
            id="firstName"
            v-model.trim="firstName"
            type="text"
            placeholder="First Name"
            class="formInput"
            :class="{invalid:!validFirstName, valid:validFirstName}"
          >
        </p>
        <p>
          <input
            id="lastName"
            v-model.trim="lastName"
            type="text"
            placeholder="Last Name"
            class="formInput"
            :class="{invalid:!validLastName, valid:validLastName}"
          >
        </p>
        <p>
          <input
            id="phoneNumber"
            v-model="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            class="formInput"
            maxlength="10"
          >
        </p>
        <p>     
          <ul
            v-if="passwordFocused"
            id="passwordRequirements"
          >
            <li>Must be at least 8 characters long</li>
            <li>Uppercase Letter</li>
            <li>Lowercase Letter</li>
            <li>Number (0-9)</li>
            <li>Special Character (#?!@$%^&amp;*-)</li>
          </ul>
          <input
            id="password"
            v-model.trim="password"
            type="password"
            placeholder="Password"
            class="formInput"
            :class="{invalid:!validPassword, valid:validPassword}"
          >
        </p>
        <button
          id="submit"
          type="button"
          :disabled="!validForm"
          :class="{disabled:!validForm}"
          @click="onSubmit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script lang=ts>
import { validate } from "../../Forms/HelperModules/validation";
import {computed, ref, defineComponent} from 'vue';
import store from '../../../store/index'
import {RegisterParams} from "../../../types/index"
export default defineComponent({
  name: "SignupForm",
  emits: ['close'],
  setup(_props, {emit}){
    const errorMessage = ref("")
    const error = ref(false);
    const phoneNumber = ref("");
    const email = ref("");
    const emailEntered = ref(false);
    const firstName = ref("");
    const lastName = ref("");
    const username = ref("");
    const password = ref("");
    const validEmail = computed(() => validate("email", email.value));
    const validFirstName = computed(() => validate("name", firstName.value));
    const validLastName = computed(() => validate("name", lastName.value));
    const validUsername = computed(() => validate("username", username.value));
    const validPassword = computed(() => validate("password", password.value));
    const passwordFocused = computed(() => password.value.length > 0 && !validPassword.value);
    const validForm = computed(() => validEmail.value && validFirstName.value && validLastName.value && validUsername.value && validPassword.value);
    /**
     * @todo implement form submission
     */
    async function onSubmit() {
      const data: RegisterParams = {
        email: email.value,
        username: username.value,
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phoneNumber.value,
        password: password.value,
      }
      try{await store.dispatch('register', data);}
      catch(err){
        error.value = true;
        console.log(err);
        errorMessage.value = err.message;
        
      }
      
    }

    function close(){
      emit("close");
    }
    return{
      email,
      firstName,
      lastName,
      username,
      password,
      validEmail,
      validFirstName,
      validLastName,
      validUsername,
      validPassword,
      validForm,
      passwordFocused,
      onSubmit,
      close,
      emailEntered,
      phoneNumber,
      error,
      errorMessage
    }
  }
});
</script>
<style lang='scss' scoped>
    @import '../../../styles/forms.scss';
</style>
