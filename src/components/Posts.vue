<template>
    <!-- example of post
    <pre>{{ posts[0] }}</pre> -->
    <pagination :pageCount="20" :prevText="'<'" :nextText="'>'" :pageRange="5" :breakViewText="'...'"></pagination>
    <div class="blog-items">
        <postItem v-for="post in posts" :post="post"></postItem>
    </div>
    <div v-if="!posts.length">
        There are no posts
    </div>
</template>

<script setup>
import postItem from "./PostItem.vue"
import pagination from '../components/Pagination.vue'

const props = defineProps({
    posts: {
        required: true,
        type: Array,
    },
})
</script>