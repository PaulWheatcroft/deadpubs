<script setup>
import { RouterLink, RouterView } from 'vue-router'
import supabase from './api/client'
import { useAuthStore } from './stores/authStore'
import FlashMessagesWrapper from './components/FlashMessageWrapper.vue'
import Navigation from './components/Navigation.vue'
import Title from './components/Title.vue'

const authStore = useAuthStore()
</script>

<template>
  <FlashMessagesWrapper />
  <Navigation :isLoggedIn="authStore.isLoggedIn" />
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.main-content {
    padding-top: 50px;
}

</style>
