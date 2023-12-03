<script setup>
const props = defineProps({
    id: String,
    name: String,
    required: false,
    placeholder: String,
    label: String,
    value: String,
    minlength: 4,
    maxlength: 20,
    size: 10,
});
</script>

<template>
    <label :for="name">{{ label }} <span v-if="required" class="required-asterisk">*</span></label>
    <input type="text" :id="id" :placeholder="placeholder" :value="value">
</template>

<style scoped>
    
    .required-asterisk {
        color: red;
    }

    input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>