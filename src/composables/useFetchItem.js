import { ref } from "vue";

export default function useFetchItem(id) {
  const data = ref(null);
  const url = `https://api.hnpwa.com/v0/item/${id}.json`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json));

  return { data };
}
