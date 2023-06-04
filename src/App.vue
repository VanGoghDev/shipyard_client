<script setup>
</script>
<template>
  <button v-on:click="incrementid">increment</button>
  <button v-on:click="decrementid">decrement</button>
  {{ id }}
  <router-link :to="`/post/${id}`">blog</router-link>
  <router-view></router-view>
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import store from '../store/index.js';
  import axiosClient from './axiosClient.js';

  const id = computed(() => store.state.id);

  onMounted(async() => {
    let response = await axiosClient.get("products/1")
    console.log(response.data)
  })

  function incrementid() {
    store.commit('increment')
  }

  function decrementid() {
    store.commit('decrement')
  }
</script>