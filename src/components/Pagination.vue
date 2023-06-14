<template>
    <div class=""></div>
    {{ pageNumber }}
</template>

<script setup>
import { ref } from 'vue'

// https://vuejsexamples.com/a-vue-3-component-to-make-pagination-based-on-vuejs-paginate/
const props = defineProps({
    post: {
        pageCount: true,
        clickHandler: {
            type: Function,
            required: true
        },
        prevText: {
            type: String
        },
        nextText: {
            type: String
        },
        containerClass: {
            type: String
        },
        pageRange: {
            type: Number
        },
        breakViewText: {
            type: String
        },
        initialPage: {
            type: Number
        }
    }
})

const pageNumber = ref(0);

</script>