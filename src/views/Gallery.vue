<template>
    Галерея
    <section>
        <div v-for="image in images">
            <pre>{{ image }}</pre>
            <img :src="image.url"/>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import axiosImageClient from "../axiosImageClient.js";

const images = ref({});

onMounted(async () => {
    axiosImageClient.get("photos?offset=0&limit=10")
        .then(({ data }) => images.value = data.photos)
})
</script>