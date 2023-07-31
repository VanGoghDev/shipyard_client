<script setup>
import Photos from './photos.vue'
</script>

<template>
    <div class="model-post model-post_white">
        <div class="model-post__head">
            <div class="model-post__general-info">
                <div class="model-post__created-ago">Создано 3 дня назад</div>
                <div class="model-post__name">Бригантина Феникс</div>
                <div class="model-post__scale">1:72</div>
            </div>
            <div class="model-post__awards"></div>
        </div>
        <div class="model-post__photos">
            <Photos></Photos>
        </div>
        <div class="model-post__description">
            <p>Lorem ipsum dolor sit amet consectetur. Arcu sed ipsum nisl blandit cursus sed. Eget rutrum tincidunt auctor
                neque. Erat vitae nulla lectus id morbi aliquet. A sed id consectetur phasellus aliquam cursus amet ut.
                Varius ac eget elit sollicitudin nulla aliquam purus.</p>
        </div>
        <div class="model-post__btns"></div>
    </div>
</template>

<style scoped>
.model-post {
    width: 45.625rem;
    height: 32.1875rem;
    padding: 1rem 4.5rem;
}

.model-post_white {
    border-radius: 0.9375rem;
    background: #FFF;
}

.model-post__created-ago,
.model-post__scale {
    color: var(--gray-etext, #787C7E);
    font-family: Roboto;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.model-post__name {
    color: #000;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.model-post__photos {
    margin-top: 0.56rem;
}

.model-post__description {
    margin-top: 1.81rem;

    color: #000;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>