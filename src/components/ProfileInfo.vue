<template>
    <div class="profile-info content content-white">
        <div class="profile-info__background">
            <div class="background__img">
                <img src="../assets/profile-background.png">
            </div>
            <div class="background__add-btn"></div>
        </div>
        <div class="profile-info__photo">
            <div class="photo__img">
                <img src="../assets/octopus.svg">
            </div>
            <div class="photo__name">Верфь Ивана Ивановича</div>
            <div class="photo_add-btn"></div>
        </div>
        <div class="profile-info__setting-btn"></div>
        <div class="profile-ijnfo__shipyard-statistics"></div>
        <div class="profile-info__social-links"></div>
        <div class="profile-info__new-post-btn"></div>
    </div>
</template>

<style scoped>
.profile-info {
    width: 20.32581rem;
    height: 16.875rem;
    position: relative;
}

.profile-info__background {
    width: 20.4375rem;
    height: 4.19081rem;
    border-radius: 0.9375rem;
}

.profile-info__photo {
    position: absolute;
    top: 1.12rem;
    left: 1.07rem;

    width: 5.19313rem;
    height: 5.19663rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    border-radius: 0.9375rem;
    border: 1px solid #000;
    background: #F9FAFB;
}

.photo__name {
    margin-top: 0.8rem;

    height: 0.78231rem;
    flex-shrink: 0;

    color: #000;
    font-size: 0.75rem;
    font-weight: 400;
}
</style>