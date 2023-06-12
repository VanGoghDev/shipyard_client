<template>
    <article>
        <header>
            <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
        </header>
        <div>
            {{ post.tag }}
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