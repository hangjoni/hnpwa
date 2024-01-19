<template>
  <div class="pagination">
    <router-link
      :to="'/{{slug }}/{{ currentPage - 1 }}'"
      v-if="currentPage > 1"
    >
      Previous
    </router-link>
    <span>Page {{ currentPage }} of {{ maxPage }}</span>
    <router-link
      :to="slug + '/' + (currentPage + 1)"
      v-if="currentPage < maxPage"
    >
      Next
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps(["slug", "currentPage", "maxPage"]);
</script>

<style scoped>
.pagination {
  color: white;
}
</style>
