<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()

defineProps({
  isLoggedIn: Boolean,
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'})
}

</script>

<template>
    <nav class="mb-4 navbar bg-rose-950">
        <RouterLink to="/" @click="scrollToTop" class="mr-4"><i class="fa-regular fa-hand-point-up"></i> {{ (isLoggedIn) ? 'Home' : 'Top' }}</RouterLink>
        <RouterLink to="/admin" class="mr-4" v-if="isLoggedIn"><i class="fa-solid fa-user-tie"></i> Admin</RouterLink>
        <button @click="authStore.signOut" class="mr-4" v-if="isLoggedIn"><i class="fa-solid fa-right-from-bracket"></i> SIGN OUT</button>
        <a href="https://www.tiktok.com/@deadpubs" target="_blank" class="mr-4"><i class="fa-brands fa-tiktok"></i> TikTok</a>
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
    color: rgb(228, 199, 56);
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Ensure the nav stays above other content */
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for style */
    border-bottom: 1px solid rgb(228, 199, 56);
}
</style>