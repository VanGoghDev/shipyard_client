<template>
    <nav class="navigation navigation_blue">
        <div class="navigation__left">
            <router-link class="navigation__link" to="/"><img src="../assets/logo.svg" alt="logo" /></router-link>
        </div>
        <div class="navigation__right">
            <router-link class="navigation__link" to="/study-book">Учебник</router-link>
            <router-link class="navigation__link" to="/posts">Истории</router-link>
            <router-link class="navigation__link" to="/gallery">Фотогалерея</router-link>
            <router-link class="navigation__link" to="/contacts">Контакты</router-link>
            <router-link class="navigation__link" to="/profile">Профиль</router-link>
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