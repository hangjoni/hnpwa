<template>
  <Feed :data="data" />
</template>

<script setup>
import { computed } from "vue";
import useFetch from "../composables/useFetch.js";
import Feed from "../components/Feed.vue";
const { data } = useFetch("news");
</script>
