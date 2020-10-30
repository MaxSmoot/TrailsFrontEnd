<template>
    <div id="wrapper">
        <form @submit.prevent="onSubmit" class="form">
            <img class="x" src='../../../assets/x.svg' @click="close">
         <h2>Sign Up</h2>
         <p><input type="email" placeholder="Email" id="emailbox" v-model.trim="email" :class="{invalid:!validEmail, valid:validEmail}"></p>
         <button type="button" v-on:click="emailEntered = true" :disabled="!validEmail" :class="{disabled:!validEmail}" v-if="!emailEntered">Sign Up</button>
         <div id="fullForm" v-if="emailEntered">
            <p><input type="text" placeholder="First Name" id="firstName" v-model.trim="firstName" :class="{invalid:!validFirstName, valid:validFirstName}"></p>
            <p><input type="text" id="lastName" placeholder="Last Name" v-model.trim="lastName" :class="{invalid:!validLastName, valid:validLastName}"></p>
            <p><input type="text" id="username" placeholder="Username" v-model.trim="username" :class="{invalid:!validUsername, valid:validUsername}"></p>
            <p>     
                <ul id="passwordRequirements" v-if="passwordFocused">
                    <li>Must be at least 8 characters long</li>
                    <li>Uppercase Letter</li>
                    <li>Lowercase Letter</li>
                    <li>Number (0-9)</li>
                    <li>Special Character (#?!@$%^&amp;*-)</li>
                </ul>
                <input type="password" placeholder="Password" id="password" v-model.trim="password" :class="{invalid:!validPassword, valid:validPassword}">
            </p>
            <button id="submit" type="submit" :disabled="!validForm" :class="{disabled:!validForm}">Submit</button>
        </div>
        </form>
    </div>
</template>

<script>
import { validate } from "../../Forms/HelperModules/validation";

export default {
  name: "signup-form",
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      emailEntered: false,
    };
  },
  computed: {
    /**
     * Check if the user is typing in the password field - can be accessed in variable passwordFocused (NOT by calling the function)
     * @return {Boolean} Whether or not the user is typing in the password input
     */
    passwordFocused() {
      return !this.validPassword && this.password.length > 0;
    },
    /**
     * Validate the Email input - can be accessed in variable validEmail (NOT by calling the function)
     * @return {Boolean} Whether or not the email input is valid
     */
    validEmail() {
      return validate("email", this.email);
    },
    /**
     * Validate the First Name input - can be accessed in variable validFirstName (NOT by calling the function)
     * @return {Boolean} Whether or not the First Name input is valid
     */
    validFirstName() {
      return validate("name", this.firstName);
    },
    /**
     * Validate the Last Name input - can be accessed in variable validPassword (NOT by calling the function)
     * @return {Boolean} Whether or not the Last Name input is valid
     */
    validLastName() {
      return validate("name", this.lastName);
    },
    /**
     * Validate the Username input - can be accessed in variable validUsername (NOT by calling the function)
     * @return {Boolean} Whether or not the Username input is valid
     * @todo Check the username against the database to make sure it is not taken
     */
    validUsername() {
      return validate("username", this.username);
    },
    /**
     * Validate the Password input - can be accessed in variable validPassword (NOT by calling the function)
     * @return {Boolean} Whether or not the Password input is valid
     */
    validPassword() {
      return validate("password", this.password);
    },
    /**
     * Validate the Form - can be accessed in variable validPassword (NOT by calling the function)
     * @return {Boolean} Whether or not the Form is valid
     */
    validForm() {
      return (
        this.validEmail &&
        this.validFirstName &&
        this.validLastName &&
        this.validUsername &&
        this.validPassword
      );
    },
  },
  methods: {
    /**
     * Handles the form submission
     * @todo implement communication to the backend
     */
    onSubmit() {
      console.log("submmited");
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
