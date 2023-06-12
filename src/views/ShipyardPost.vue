<template>
    <div>
        {{ post.title }}
        Реакций: {{ post.reactions }}
    </div>
    <div>
        Автор: {{ post.userId }}
    </div>
    <div>
        <div v-for="tag in post.tags">
            {{ tag }}
        </div>
    </div>
    <div>
        {{ post.body }}
    </div>
    <div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient.js';

const route = useRoute();
const post = ref({});

onMounted(async () => {
    axiosClient.get(`posts/${route.params.id}`)
        .then(({ data }) => post.value = data || {});
})

</script>