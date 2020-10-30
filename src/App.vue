<template>
  <div id="wrapper">
    <link
      href='https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet'
    />
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  min-height: 100%;
}
body {
  position: absolute;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  background: transparent;
}
h1{
  font-weight: normal;
}
</style>
