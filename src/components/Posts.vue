<template>
    example of post
    <pre>{{ posts[0] }}</pre>
    <div>
        <postItem v-for="post in posts" :post="post"></postItem>
    </div>
    <div v-if="!posts.length">
        There are no posts
    </div>
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