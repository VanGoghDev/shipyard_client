<script setup>
import ProfileInfo from '../components/ProfileInfo.vue'
import Achievements from '../components/Achievements.vue'
import ContentSwitcher from '../components/ContentSwitcher.vue'
</script>

<template>
    <div class="profile-content grid grid-cols-2 gap-7">
        <div class="right-column">
            <ContentSwitcher></ContentSwitcher>
        </div>
        <div class="left-column gap-16 col-auto">
            <ProfileInfo></ProfileInfo>
            <Achievements></Achievements>
        </div>
    </div>
</template>

<style scoped>
.profile-content {
    margin-top: 3rem;
}

.left-column {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>