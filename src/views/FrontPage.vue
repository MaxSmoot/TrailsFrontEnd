<template>
  <div id="grid-container">
    <div class="left">
      <h1>Trails</h1>
      <p>It's Twitter for the High Country</p>
    </div>
    <div class="right">
      <button id="signupBtn" @click="signUpFormShow = !signUpFormShow">
        Sign Up
      </button>
      <button id="loginBtn" @click="loginFormShow = !loginFormShow">
        Log In
      </button>
    </div>
    <div v-show="loginFormShow || signUpFormShow" class="popUpForm">
      <keep-alive>
        <component
          :is="signUpFormShow ? signupForm : loginForm"
          @close="
            loginFormShow ? (loginFormShow = false) : (signUpFormShow = false)
          "
        />
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import signupForm from './../components/FrontPage/Forms/signup-form.vue';
import loginForm from './../components/FrontPage/Forms/login-form.vue';
import { ref } from 'vue';
export default {
  name: 'Signup',
  components: {
    signupForm,
    loginForm
  },
  setup() {
    const signUpFormShow = ref(false);
    const loginFormShow = ref(false);

    return {
      signUpFormShow,
      loginFormShow,
      signupForm,
      loginForm
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@mixin flexCenter() {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
body {
  font-family: 'Roboto', sans-serif;
}
h1 {
  margin-bottom: 0;
}
#grid-container {
  display: grid;
}
@media screen and (max-width: 815px) {
  #grid-container {
    background: linear-gradient(180deg, $primary_color 50%, #ffffff 50%);
    grid-template-rows: 50% 50%;
  }
  .left {
    height: 50vh;
    width: 100vw;
  }
  .right {
    height: 50vh;
    width: 100vw;
  }
}
@media screen and (min-width: 815px) {
  #grid-container {
    grid-template-columns: 50% 50%;
    background: linear-gradient(90deg, $primary_color 50%, #ffffff 50%);
  }
  .left {
    height: 100vh;
  }
  .right {
    height: 100vh;
  }
}
.popUpForm {
  @include flexCenter();
  background-color: #0000006b;
  height: 100%;
  position: absolute;
  z-index: 10;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  width: 100%;
}
.left {
  @include flexCenter();
  text-align: center;
  color: #000000;
  font-size: 2rem;
  position: relative;
  background: url('./../assets/mountains.png') no-repeat center bottom;
}
.right {
  @include flexCenter();
  position: relative;
}
button {
  cursor: pointer;
  font-size: 2rem;
  display: block;
  width: 20rem;
  height: 2.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 3rem;
  outline: none;
}
#signupBtn {
  color: #ffffff;
  background-color: $primary_color;
  border: none;
  &:hover {
    background-color: $primary_color_hover;
  }
}
#loginBtn {
  background: transparent;
  border: none;
  border: $primary_color 0.1rem solid;
  &:hover {
    background-color: #56d39b13;
  }
}
</style>
