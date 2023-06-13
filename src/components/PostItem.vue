<template>
    <article class="blog-item">
        <header class="blog-item__header">
            <router-link class="blog-item__link" :to="`/post/${post.id}`">{{ post.title }}</router-link>
            <div class="blog-item__reactions"> {{ post.reactions }}</div>
        </header>
        <div class="blog-item__body">
            {{ post.body }}
        </div>
        <div class="blog-item__footer">
            <button class="blot-item__button">Читать далее</button>
        </div>
    </article>
</template>

<script setup>

const props = defineProps({
    post: {
        requiered: true,
    }
})

</script>