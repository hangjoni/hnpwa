<template>
  <div v-for="postData in props.data" :key="postData.id" class="post">
    <div class="top-line">
      <span>{{ postData.title }}</span>
      <span class="domain">({{ postData.domain }})</span>
    </div>
    <div class="bottom-line">
      <div class="left"></div>
      <span
        >{{ postData.points }} points by {{ postData.user }}
        {{ postData.time_ago }} | {{ postData.comments_count }} comments</span
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
.post {
  padding: 0.5rem;
}
.top-line {
  display: flex;
  gap: 0.5rem;
}

.domain {
  color: gray;
  font-size: 0.9rem;
}

.bottom-line {
  color: gray;
  font-size: 0.9rem;
  display: flex;
  gap: 0.1rem;
}
</style>
