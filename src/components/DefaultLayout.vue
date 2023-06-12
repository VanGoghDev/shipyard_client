<template>
    <header>
        <navbar></navbar>
    </header>
    <main>
        <router-view></router-view>
    </main>
</template>

<script setup>
import navbar from './Navbar.vue'
</script>