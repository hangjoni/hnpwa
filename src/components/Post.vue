<template>
  <div>
    <div>{{ props.postData.title }}</div>
    <div v-if="props.postData.content">{{ props.postData.content }}</div>
    <div v-if="props.postData.url">{{ props.postData.url }}</div>
    <div v-if="props.postData.domain">({{ props.postData.domain }})</div>
    <div>by {{ props.postData.user }}</div>
    <div>{{ props.postData.time_ago }} ago</div>
    <div v-if="props.postData.comments_count > 0">Comments</div>
    <Post
      v-for="(comment, index) in postData.comments"
      :key="index"
      :postData="comment"
    />
  </div>
</template>

<script setup>
const props = defineProps(["postData"]);
</script>

<style lang="scss" scoped></style>
