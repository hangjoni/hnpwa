<template>
  <div class="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style scoped>
.app {
  background-color: #f6f6ef;
  width: 100vw;
  height: 100vh;
}
</style>
