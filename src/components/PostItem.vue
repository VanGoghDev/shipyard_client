<template>
    <div>
        {{ post?.title }}
    </div>
</template>

<script setup>

const props = defineProps({
    post: {
        requiered: true,
    }
})

</script>