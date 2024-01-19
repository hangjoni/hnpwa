<template>
  <div class="thread">
    <Post :postData="data" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import useFetchItem from "../composables/useFetchItem";
import Post from "../components/Post.vue";

const route = useRoute();
console.log("Thread id", route.params.id);

const { data } = useFetchItem(route.params.id);
</script>

<style scoped>
.thread {
  background-color: #f6f6ef;
  color: #000;
}
</style>
