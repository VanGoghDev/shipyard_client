<template>
    <div class="photos-container">
        <div class="selected-photo">
            <img src="../../assets/modelPhotos/phoenix.jpeg">
        </div>
        <div class="photos">
            <div class="photo photo-1"><img src="../../assets/modelPhotos/phoenix.jpeg"></div>
            <div class="photo photo-2"><img src="../../assets/modelPhotos/phoenix.jpeg"></div>
            <div class="photo photo-3"><img src="../../assets/modelPhotos/phoenix.jpeg"></div>
            <div class="more-photos">+3</div>
        </div>
    </div>
</template>

<style scoped>
.photos {
    margin-left: 1.06rem;
}

.photos-container {
    display: flex;
    justify-content: space-between;
}

.selected-photo img {
    width: 482px;
    height: 280px;
}

.selected-photo img {
    border-radius: 0.9375rem;
}

.photo {
    margin-bottom: 0.39rem;
}

.photo img {
    width: 4.625rem;
    height: 4.07281rem;
}

.photo img {
    border-radius: 0.9375rem;
}

.more-photos {
    width: 4.625rem;
    height: 4.07281rem;
    border-radius: 0.9375rem;
    background: #D9D9D9;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #5F5F5F;
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 400;
}
</style>