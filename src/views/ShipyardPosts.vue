<template>
    Мои истории
    <blogPosts :posts="posts ?? []"></blogPosts>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import store from "../store/index";
import blogPosts from "../components/Posts.vue"
import axiosClient from "../axiosClient.js";

onMounted(async () => {
    getPosts();
})

const posts = computed(() => store.state.posts);

async function getPosts() {
    axiosClient.get("posts")
    .then(({ data }) => store.commit("posts", data.posts));
}
</script>