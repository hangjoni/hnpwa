<template>
  <Post :data="data" />
</template>

<script setup>
import { computed } from "vue";
import useFetch from "../composables/useFetch.js";
import Post from "../components/Post.vue";
const { data } = useFetch("news");
</script>
