<template>
    <pre>{{ posts }}</pre>
    <button v-on:click="incrementid">increment</button>
    <button v-on:click="decrementid">decrement</button>
    {{ id }}
    <router-link :to="`/post/${id}`">blog</router-link>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store/index';
import axiosClient from '../axiosClient.js';

const id = computed(() => store.state.id);
const posts = computed(() => store.state.posts)

onMounted(async () => {
    let response = await axiosClient.get("products/1")
    store.commit("posts", response.data)
    console.log(response.data)
})

function incrementid() {
    store.commit('increment')
}

function decrementid() {
    store.commit('decrement')
}
</script>