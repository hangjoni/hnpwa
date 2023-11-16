<template>
  <!-- need to handle postData is null as it might be the case when component is mounting -->
  <div
    v-if="
      postData &&
      !postData.deleted &&
      !postData.content.includes('[flagged]') &&
      !postData.dead
    "
    class="post"
  >
    <!-- Link post -->
    <div v-if="postData.type === 'link'">
      <div v-if="postData.url && postData.domain">
        <a
          :href="postData.url"
          target="_blank"
          rel="noopener noreferrer"
          class="post_link"
          >{{ postData.title }} ({{ postData.domain }})
        </a>
      </div>
    </div>

    <!-- Comment post-->
    <div class="post_header">
      <span>by {{ postData.user }} </span>
      <span>{{ postData.time_ago }}</span>
    </div>
    <div
      v-if="postData.content"
      v-html="decodeHtmlEntities(postData.content)"
    ></div>

    <div v-if="postData.comments_count > 0">
      <div v-for="(comment, index) in postData.comments">
        <Post v-if="comment !== null" :key="index" :postData="comment" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["postData"]);
function decodeHtmlEntities(str) {
  str = str.replace(/<p>/g, "");
  const entities = {
    "&quot;": '"',
    "&apos;": "'",
    "&#x27;": "'",
    "&#x2F;": "/",
    "&#39;": "'",
    "&#47;": "/",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&nbsp;": " ",
    "&iexcl;": "¡",
    "&cent;": "¢",
    "&pound;": "£",
    "&curren;": "¤",
    "&yen;": "¥",
    "&brvbar;": "¦",
    "&sect;": "§",
    "&uml;": "¨",
    "&copy;": "©",
    "&ordf;": "ª",
    // ... add as many entities as needed
  };

  return str.replace(/&[^\s;]+;/g, (match) => entities[match] || match);
}
</script>

<style scoped>
.post {
  padding: 0.5rem 0rem 0.5rem 4rem;
}

.post_header {
  display: flex;
  gap: 0.5rem;
}

.post_link {
  color: #ececec;
  font-style: italic;
  text-decoration: underline;
  font-size: 1.2rem;
}
</style>
