<script setup>
import { RouterLink, RouterView } from 'vue-router'
import supabase from './api/client'
import { useAuthStore } from './stores/authStore'
import Title from './components/Title.vue'
import FlashMessagesWrapper from './components/FlashMessageWrapper.vue'

const authStore = useAuthStore()
</script>

<template>
  <FlashMessagesWrapper />
  <nav class="mb-4">
    <RouterLink to="/" class="mr-4">Home</RouterLink>
    <RouterLink to="/admin" class="mr-4" v-if="authStore.isLoggedIn">Admin</RouterLink>
    <button @click="authStore.signOut" class="mr-4" v-if="authStore.isLoggedIn">Sign Out</button>
    <RouterLink to="/sign-in" v-else>Sign In</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
