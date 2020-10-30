<template>
  <div id="flex-container">
    <div class="left">
      <h1>Trails</h1>
      <p>It's Twitter for the High Country</p>
    </div>
    <div class="right">
      <button @click="toggleSignupForm" id="signupBtn">Sign Up</button>
      <button id="loginBtn" @click="toggleLoginForm">Log In</button>
    </div>
    <div v-if="signUpFormShown" class="popUpForm">
      <signupForm @close="toggleSignupForm" />
    </div>
    <div v-if="loginFormShow" class="popUpForm">
      <loginForm @close="toggleLoginForm" />
    </div>
  </div>
</template>

<script lang="ts">
import signupForm from "./../components/FrontPage/Forms/signup-form.vue";
import loginForm from "./../components/FrontPage/Forms/login-form.vue";
import { ref } from "vue";
export default {
  name: "Signup",
  components: {
    signupForm,
    loginForm,
  },
  setup() {
    const signUpFormShown = ref(false);
    const loginFormShow = ref(false);

    function toggleLoginForm() {
      if (loginFormShow.value) {
        loginFormShow.value = false;
      } else {
        loginFormShow.value = true;
      }
    }

    function toggleSignupForm() {
      if (signUpFormShown.value) {
        signUpFormShown.value = false;
      } else {
        signUpFormShown.value = true;
      }
    }
    return {
      toggleSignupForm,
      signUpFormShown,
      toggleLoginForm,
      loginFormShow,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@mixin flexCenter() {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-bottom: 0;
  font-weight: normal;
}
#flex-container {
  @include flexCenter();
  width: 100vw;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 100vh;
  position: absolute;
  z-index: -2;
}
@media screen and (max-width: 815px) {
  #flex-container {
    background: linear-gradient(180deg, $primary_color 50%, #ffffff 50%);
    flex-direction: column;
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
  #flex-container {
    background: linear-gradient(90deg, $primary_color 50%, #ffffff 50%);
  }
  .left {
    height: 100vh;
    width: 50vw;
  }
  .right {
    height: 100vh;
    width: 50vw;
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
  z-index: -1;
  background: url("./../assets/mountains.png") no-repeat center bottom;
}
.right {
  @include flexCenter();
  position: relative;
  z-index: -1;
}
button {
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
