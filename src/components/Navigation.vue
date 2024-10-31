<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()

defineProps({
  isLoggedIn: Boolean,
})

</script>

<template>
    <nav class="mb-4 navbar bg-gray-400">
        <RouterLink to="/" class="mr-4">Home</RouterLink>
        <RouterLink to="/admin" class="mr-4" v-if="isLoggedIn">Admin</RouterLink>
        <button @click="authStore.signOut" class="mr-4" v-if="isLoggedIn">SIGN OUT</button>
        <RouterLink to="/sign-in" v-else>Sign In</RouterLink>
    </nav> 
</template>

<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Ensure the nav stays above other content */
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for style */
}
</style>