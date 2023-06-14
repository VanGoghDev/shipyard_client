<template>
    <ul class="pagination">
        <li class="pagination__item">
            <a href="#" class="pagination__link">{{ prevText }}</a>
        </li>
        <li v-for="index in pageRange" :key="index" class="pagination__item" :class="[
            index === currentPageNumber ? 'pagination__item_active' : '',
        ]">
            <a href="#" class="pagination__link">{{ index }}</a>
        </li>
        <li class="pagination__item">
            <a href="#" class="pagination__link">{{ breakViewText }}</a>
        </li>
        <li v-for="index in reverseKeys(pageRange)" :key="index" class="pagination__item">
            <a href="#" class="pagination__link">{{ pageCount - (index - 1) }}</a>
        </li>
        <li class="pagination__item">
            <a href="#" class="pagination__link">{{ nextText }}</a>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'

// https://vuejsexamples.com/a-vue-3-component-to-make-pagination-based-on-vuejs-paginate/
const props = defineProps({
    pageCount: true,
    pageCount: {
        type: Number,
        required: true
    },
    clickHandler: {
        type: Function,
        //required: true
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
})

const currentPageNumber = ref(1);
function reverseKeys(n) {
    return [...Array(n).keys()].slice().reverse()
}

</script>

<style scoped>
.pagination {
    list-style-type: none;
    display: flex;
    font-size: 1.2em;
}

.pagination__link {
    text-decoration: none;
    color: black;
}

.pagination__item {
    background-color: white;
    margin: 0 2px;
    width: 2em;
    text-align: center;
}

.pagination__item_active {
    background-color: rgb(68 155 255);;
}
</style>