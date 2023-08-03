<script setup>

import { ref, onMounted } from 'vue'

const mobile = ref(true);
const mobileNav = ref(false);

var checkScreen = function () {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 750) {
        mobile.value = true;
        return;
    }
    mobile.value = false;
    mobileNav.value = false;
    return;
};

onMounted(() => {
    window.addEventListener('resize', checkScreen);
    checkScreen();
});

</script>

<template>
    <nav class="navigation navigation_blue" :class="{ 'navigation-mobile': mobile }">
        <div class="navigation__left">
            <router-link class="navigation__link" to="/"><img src="../assets/logo.svg" alt="logo" /></router-link>
        </div>
        <div class="navigation__right" v-show="!mobile">
            <router-link class="navigation__link" to="/study-book">Учебник</router-link>
            <router-link class="navigation__link" to="/posts">Истории</router-link>
            <router-link class="navigation__link" to="/gallery">Фотогалерея</router-link>
            <router-link class="navigation__link" to="/profile">Профиль</router-link>
        </div>
        <div class="navigation-modile__right" v-show="mobile">
            <font-awesome-icon icon="fa-solid fa-bars" />
        </div>
    </nav>
</template>

<style scoped>
.navigation {
    color: #FFF;
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 10px;
    height: 3.125rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 9.44rem;

    position: fixed;
    top: 0;
    transition: .5s ease all;
    width: 100%;
    z-index: 99;
}

.navigation-mobile {
    padding: 0 2.44rem;
}

.navigation_blue {
    background: #0076BC;
}

.navigation__link {
    padding-right: 2.38rem;
    display: inline-block;
    text-decoration: none;
    color: white;
}
</style>