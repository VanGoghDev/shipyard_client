<script setup>
    import navbar from './Navbar.vue'
    import foot from './Footer.vue'
</script>

<template>
    <header>
        <navbar></navbar>
    </header>
    <main clas="content" style="margin: 0 10vw">
        <router-view></router-view>
    </main>
    <footer style="display: flex; margin: auto auto 0">
        <foot></foot>
    </footer>
</template>

<style scoped>
header {
    padding-bottom: 40px;
}
</style>