import { ref } from "vue";

export default function useFetch(destination) {
  const data = ref(null);
  const url = `https://api.hnpwa.com/v0/${destination}/1.json`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json));

  return { data };
}
