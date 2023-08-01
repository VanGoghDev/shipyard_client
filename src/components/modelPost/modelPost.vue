<template>
    <div class="model-post model-post_white content content-white">
        <div class="model-post__head">
            <div class="model-post__general-info">
                <div class="model-post__created-ago">{{ post.CreatedAgo }}</div>
                <div class="model-post__name">{{ post.Name }}</div>
                <div class="model-post__scale">{{ post.Scale }}</div>
            </div>
            <div class="model-post__awards"></div>
        </div>
        <div class="model-post__photos flex justify-center">
            <Photos></Photos>
        </div>
        <div class="model-post__description">
            <p>{{ post.Description }}</p>
        </div>
        <div class="model-post__btns"></div>
    </div>
</template>

<style scoped>
.model-post {
    width: 45.625rem;
    /* height: 32.1875rem; */
    padding: 1rem 4.5rem;
}

.model-post_white {
    border-radius: 0.9375rem;
    background: #FFF;
}

.model-post__created-ago,
.model-post__scale {
    color: var(--gray-etext, #787C7E);
    font-weight: 400;
    font-size: 0.8rem;
}

.model-post__name {
    font-size: 1.2rem;
    font-weight: 700;
}

.model-post__photos {
    margin-top: 0.56rem;
}

.model-post__description {
    margin-top: 1.81rem;
    font-weight: 400;
}
</style>

<script setup>
import Photos from './photos.vue'

const props = defineProps({
    post: {
        type: Object,
        requiered: true,
    }
})

</script>
