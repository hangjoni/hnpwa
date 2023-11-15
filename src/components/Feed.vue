<template>
  <div class="all-posts">
    <div v-for="postData in props.data" :key="postData.id" class="post">
      <router-link :to="`/thread/${postData.id}`" class="post-link">
        <div class="top-line">
          <span>{{ postData.title }}</span>
          <span class="domain" v-if="postData.domain"
            >({{ postData.domain }})</span
          >
        </div>
        <div class="bottom-line">
          <span>{{ postData.time_ago }}</span>
          <span>{{ postData.comments_count }} comments</span>
        </div>
      </router-link>
      <hr />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
.all-posts {
  background-color: #000;
  color: #ececec;
  padding-left: 1rem;
  padding-right: 1rem;
}

.post {
  max-width: 1000px;
  flex: 1;
  margin-left: auto;
  margin-right: auto;
}
.post-link {
  text-decoration: none;
  color: #ececec;
}
.top-line {
  display: flex;
  gap: 0.5rem;
  font-size: 1.2rem;
}

.domain {
  color: rgba(255, 180, 0, 1);
  font-size: 0.9rem;
}

.bottom-line {
  font-size: 0.9rem;
  display: grid;
  grid-template-columns: 10rem auto;
  gap: 1rem;
}
.bottom-line * {
  color: #696969;
}
</style>
