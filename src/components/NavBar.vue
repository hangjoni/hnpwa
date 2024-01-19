<template>
  <nav class="sidebar">
    <router-link exact to="/" class="site-name">Hacker News</router-link>
    <router-link to="/news" active-class="active-link">News</router-link>
    <router-link to="/ask" active-class="active-link">Ask</router-link>
    <router-link to="/show" active-class="active-link">Show</router-link>
    <router-link to="/jobs" active-class="active-link">Jobs</router-link>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  background-color: #ff6600;
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
  color: black;
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 3px;
  background-color: #ff6600;
}

.active-link {
  font-weight: bold;
  text-decoration: underline;
}
.site-name {
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #ff6600;
  color: black;
}
</style>
