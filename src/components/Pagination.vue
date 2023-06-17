<template>
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

const currentDisplayPageIndex = ref(0);
const firstPageIndex = 0;
const maxCurrentPage = props.pageRange * 2;

const pages = computed(() => {
    let arr = [];

    for (let i = 0; i < props.pageCount; i++) {
        arr[i] = {
            number: i + 1,
            disabled: false,
            active: i === currentDisplayPageIndex.value,
            display: false
        }
    }

    for (let i = - 1; i < props.pageRange - 1; i++) {
        let index = currentDisplayPageIndex.value + i;
        if (index >= 0 && index < props.pageCount) {
            let page = arr[index];
            page.display = true;
            arr.splice(index, 1, page);
        }
    }

    let index = currentDisplayPageIndex.value + props.pageRange - 1;
    if (index <= props.pageCount - props.pageRange) {
        let page = arr[index]
        page.display = true;
        page.disabled = true;
        arr.splice(index, 1, page)
    }


    for (let i = props.pageRange; i > 0; i--) {
        let index = props.pageCount - i;
        let page = arr[index];
        page.display = true;
        arr.splice(index, 1, page);
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
    currentDisplayPageIndex.value = 0;
}

function lastPage() {
    currentDisplayPageIndex.value = props.pageCount - 1;
}

function selectPage(index) {
    currentDisplayPageIndex.value = index - 1;
}

</script>

<style scoped>
.pagination {
    list-style-type: none;
    display: flex;
    padding: 0;
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
}
</style>