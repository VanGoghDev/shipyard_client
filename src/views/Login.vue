<script setup>
import Input from '../components/common/TextInput.vue'
import Button from '../components/Button.vue'
</script>

<template>
        <div class="login flex absolute top-[50%] justify-center">
            <div class="login__form login__form_white grid grid-cols-1 gap-4">
                <div class="login__row justify-self-center">Log In</div>
                <div class="login__row justify-self-center"><Input :id="'Username'" :placeholder="'Username'"
                        :label="'Username'" :name="'username'" :required="true"></Input></div>
                <div class="login__row justify-self-center"><Input :id="'Password'" :placeholder="'Password'"
                        :label="'Password'" :name="'Password'" :required="true"></Input></div>
                <div class="login__row justify-self-center"><Button :blue="true">Login</Button></div>
                
                <div class="login__row justify-self-center">New to shipyard? <router-link class="navigation__link" to="/register">Sign Up</router-link></div>
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
        flex-direction: column;
    }

    .login__row {
        display: flex;
        flex-direction: column;
    }
    
    .login__form_white {
        border-radius: 0.9375rem;
        background: #FFF;
    }

</style>