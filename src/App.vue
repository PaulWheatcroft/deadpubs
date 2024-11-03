<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore'
import FlashMessagesWrapper from './components/FlashMessageWrapper.vue'
import Navigation from './components/Navigation.vue'

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
