<template>
    <div class="blog-posts">
        <div class="blog-posts__container">
            <postItem v-for="post in posts" :post="post"></postItem>
            <div class="blog-posts__pagination-container">
                <pagination :pageCount="20" :prevText="'<'" :nextText="'>'" :pageRange="3" :breakViewText="'...'">
                </pagination>
            </div>
        </div>

    </div>
    <div v-if="!posts.length">
        There are no posts
    </div>
</template>

<script setup>
import postItem from "./PostItem.vue";
import pagination from '../components/Pagination.vue';

const props = defineProps({
    posts: {
        required: true,
        type: Array,
    },
});
</script>

<style scoped>
.blog-posts {
    width: 90%;
    margin: 0 auto;
}

.blog-posts__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}
</style>