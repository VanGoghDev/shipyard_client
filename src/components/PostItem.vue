<template>
    <article class="blog-item">
        <header class="blog-item__header">
            <router-link class="blog-item__link" :to="`/post/${post.id}`">{{ post.title }}</router-link>
        </header>
        <div class="blog-item__body">
            {{ post.body }}
        </div>
        <div class="blog-item__footer">
            <div class="blog-item__reactions"> Реакции: {{ post.reactions }}</div>
            <div class="blog-item__comments">Комментарии</div>
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