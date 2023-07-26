<template>
    <div class="achievement">
        <div class="achievement__image"><img class="achievement__image" :src="'../src/assets/' + imgName"></div>
        <div class="achievement__text">
            <div class="achievement__name">{{ name }}</div>
            <div class="achievement__description">{{ description }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String
    },
    description: {
        type: String
    },
    imgName: {
        type: String
    }
});

function imgPreUrl() {
    return '../assets/'
}
</script>

<style scoped>
.achievement {
    display: flex;
    align-items: flex-end;
}

.achievement__image {
    width: 3.36881rem;
    height: 3.26613rem;
    flex-shrink: 0;
}

.achievement__text {
    margin-left: 1.29px;
}

.achievement__name {
    color: #000;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.achievement__description {
    color: rgba(0, 0, 0, 0.44);
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>