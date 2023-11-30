<script setup>
    import navbar from '../components/Navbar.vue'
    import foot from '../components//Footer.vue'
</script>

<template>
    <header>
        <navbar></navbar>
    </header>
    <main relative flex justify-center>
        <router-view></router-view>
    </main>
    <footer style="display: flex; margin: auto auto 0">
        <foot></foot>
    </footer>
</template>

<style scoped>
    main {
        position: relative;
        display: flex;
        justify-content: center;
        height: 100vh;
    }
</style>