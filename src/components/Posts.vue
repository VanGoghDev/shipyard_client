<template>
    <postItem v-for="post in posts" :post="post"></postItem>
</template>

<script setup>
import postItem from "./PostItem.vue"

const props = defineProps({
    posts: {
        required: true,
        type: Array,
    },
})
</script>