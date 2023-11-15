<template>
  {{ postData }}
  {{ props.id }}
  {{ id }}
  <!-- <div>
    <h1>{{ postData.title }}</h1>
    <div v-html="postData.content"></div>
  </div> -->
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["id"]);
const postItem = ref(null);

const { postData } = useFetchItem(props.id);
</script>

<style lang="scss" scoped></style>
