<script setup>
import Achievement from "./Achievement.vue"
</script>

<template>
    <div class="achievements achievements_white">
        <div class="achievements__title">Титулы</div>
        <div class="achievements__list">
            <Achievement :name="'Искатель сокровищ'" :description="'Успешно зарегистрировался на верфи'"
                :imgName="'treasureMap.svg'"></Achievement>
            <Achievement :name="'Моделист'" :description="'Создал модель судна'" :imgName="'shipInaBottle.svg'">
            </Achievement>
        </div>
    </div>
</template>

<style scoped>
.achievements {
    width: 20.4375rem;
    height: 16.875rem;
}

.achievements_white {
    border-radius: 0.9375rem;
    background: #F9FAFB;
}

.achievements__title {
    text-align: center;
    margin-top: 0.94rem;

    color: #000;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.achievements__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>