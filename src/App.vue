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
  import { computed } from 'vue';
  import store from '../store/index.js'

  const id = computed(() => store.state.id);

  function incrementid() {
    store.commit('increment')
  }

  function decrementid() {
    store.commit('decrement')
  }
</script>