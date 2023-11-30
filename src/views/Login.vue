<script setup>
</script>

<template>
        <div class="login flex absolute top-[50%] justify-center">
            <div class="login__form login__form_white flex justify-center gap-5">
                Login
            </div>
        </div>
</template>

<style scoped>
    .login {
        margin: 0;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .login__form {
        width: 32.5625rem;
        height: 39.9375rem;
        flex-shrink: 0;
    }
    
    .login__form_white {
        border-radius: 0.9375rem;
        background: #FFF;
    }

</style>