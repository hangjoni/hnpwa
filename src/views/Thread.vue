<template>
  <div class="thread">
    <h1>Thread</h1>
    <!-- <h3>{{ id }}</h3> -->
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
console.log("Thread");
const route = useRoute();
// const id = route.params.id;
console.log("id", route.params.id);
</script>

<style scoped>
.thread {
  color: #ccc;
}
</style>
