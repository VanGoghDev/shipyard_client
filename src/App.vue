<script setup>
</script>
<template>
  <router-link :to="`/post/${id}`">blog</router-link>
  <router-view></router-view>
</template>

<script setup>
  import { computed } from 'vue';
  import store from '../store/index.js'

  const id = computed(() => store.state.id);
</script>