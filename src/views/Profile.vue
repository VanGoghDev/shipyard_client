<template>
    <div class="profile-content flex justify-center gap-5">
        <div class="right-column">
            <ContentSwitcher></ContentSwitcher>
            <ModelPost :post="post" class="post"></ModelPost>
            <ModelPost :post="post" class="post"></ModelPost>
            <ModelPost :post="post" class="post"></ModelPost>
            <ModelPost :post="post" class="post"></ModelPost>
            <ModelPost :post="post" class="post"></ModelPost>
        </div>
        <div class="left-column gap-5 col-auto hidden xl:flex">
            <ProfileInfo class="sticky top-1"></ProfileInfo>
            <Achievements></Achievements>
        </div>
    </div>
</template>

<style scoped>
.profile-content {
    margin-top: 3rem;
}

.left-column {
    flex-direction: column;
    align-items: flex-end;
}

.post {
    margin-top: 1.63rem;
}
</style>

<script setup>
import { onMounted, ref } from 'vue'

import ProfileInfo from '../components/ProfileInfo.vue'
import Achievements from '../components/Achievements.vue'
import ContentSwitcher from '../components/ContentSwitcher.vue'
import ModelPost from '../components/modelPost/modelPost.vue'

const post = ref({});

onMounted(async () => {
    post.value = {
        "Name": "Бригантина Феникс",
        "CreatedAgo": "Создано 4 дня назад",
        "Scale": "1:72",
        "Description": "Lorem ipsum dolor sit amet consectetur. Arcu sed ipsum nisl blandit cursus sed. Eget rutrum tincidunt auctor neque. Erat vitae nulla lectus id morbi aliquet. A sed id consectetur phasellus aliquam cursus amet ut. Varius ac eget elit sollicitudin nulla aliquam purus."
    }
})

</script>