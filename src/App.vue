<template>
  <div class="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style lang="scss" scoped></style>
