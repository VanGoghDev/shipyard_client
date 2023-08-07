<script setup>
const props = defineProps({
    isActive: true,
    blue: false,
    white: false
});
</script>

<template>
    <button :class="{ active: isActive, blue: blue, white: white }">
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    border-radius: 5px;
    border: 1px solid #000;
    padding: 10px 38px;
}

.white {
    background: rgba(255, 255, 255, 0.93);
    color: #000;
    font-size: 12px;
    font-weight: 700;
}

.blue {
    background: #0076BC;
    color: #FFF;
    font-size: 12px;
    font-weight: 700;
}
</style>