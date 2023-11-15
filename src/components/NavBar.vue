<template>
  <nav class="sidebar">
    <router-link exact to="/" active-class="active-link">Home</router-link>
    <router-link to="/news" active-class="active-link">News</router-link>
    <router-link to="/ask" active-class="active-link">Ask</router-link>
    <router-link to="/show" active-class="active-link">Show</router-link>
    <router-link to="/jobs" active-class="active-link">Jobs</router-link>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  background-color: #000;
  color: white;
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
}

li {
  margin-bottom: 10px;
}

a {
  color: white;
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 3px;
}

.active-link {
  font-weight: bold;
  color: #000;
  background-color: rgba(255, 180, 0, 0.8);
}
</style>
