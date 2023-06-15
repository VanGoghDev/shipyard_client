<template>
    <div v-for="page in pages">{{ page }}</div>
    <ul class="pagination">
        <li class="pagination__item">
            <a @click="firstPage()" class="pagination__link" href="#">&lt;&lt;</a>
        </li>

        <li class="pagination__item">
            <a @click="prevPage()" class="pagination__link" href="#">{{ prevText }}</a>
        </li>

        <li v-for="page in pages.filter(p => p.display)" :class="{ 'pagination__item_active': page.active }"
            class="pagination__item">
            <a v-if="page.disabled" class="pagination__link"> {{ breakViewText }}</a>
            <a v-if="page.display && !page.disabled" @click="selectPage(page.number)" class="pagination__link" href="#"> {{
                page.number }}</a>
        </li>

        <li class="pagination__item">
            <a @click="nextPage()" class="pagination__link" href="#">{{ nextText }}</a>
        </li>

        <li class="pagination__item">
            <a @click="lastPage()" class="pagination__link" href="#">&gt;&gt;</a>
        </li>
    </ul>
</template>

<script setup>
import { computed, ref } from 'vue'

// https://vuejsexamples.com/a-vue-3-component-to-make-pagination-based-on-vuejs-paginate/
const props = defineProps({
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

const currentDisplayPageIndex = ref(1);
const firstPageIndex = 1;
const maxCurrentPage = props.pageRange * 2;

const pages = computed(() => {
    let arr = [];

    let displayOffset = props.pageRange;
    let midPageIndex = props.pageRange + currentDisplayPageIndex.value;
    for (let i = 1; i < props.pageCount + 1; i++) {
        let displayPage = i === midPageIndex - displayOffset
        let displayAfterMid = i === props.pageCount - displayOffset;
        arr[i - 1] = {
            number: i,
            disabled: i === midPageIndex,
            active: i === currentDisplayPageIndex.value,
            display: displayPage || i === props.pageCount - displayOffset
        }
        if (i < midPageIndex && displayPage) {
            displayOffset--;
        }
        if (i === midPageIndex) {
            displayOffset = props.pageRange;
        }
        if (i > midPageIndex && displayAfterMid) {
            displayOffset--;
        }
    }
    return arr;
})

function prevPage() {
    if (currentDisplayPageIndex.value === firstPageIndex) return;
    currentDisplayPageIndex.value--;
}

function nextPage() {
    if (currentDisplayPageIndex.value === props.pageCount) return;
    currentDisplayPageIndex.value++;
}

function firstPage() {
    currentDisplayPageIndex.value = 1;
}

function lastPage() {
    currentDisplayPageIndex.value = props.pageCount;
}

function selectPage(index) {
    currentDisplayPageIndex.value = index;
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
    background-color: rgb(68 155 255);
    ;
}
</style>