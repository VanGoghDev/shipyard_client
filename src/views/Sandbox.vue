<template>
    <pagination
        :pageCount="20"
        :prevText="'<'"
        :nextText="'>'"
        :pageRange="3"
        :breakViewText="'...'"
    ></pagination>
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
import pagination from '../components/Pagination.vue'

const id = computed(() => store.state.id);
const posts = computed(() => store.state.posts)

onMounted(async () => {
    let response = await axiosClient.get("posts")
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