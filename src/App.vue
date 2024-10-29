<script setup>
import Title from './components/Title.vue'
</script>

<template>
    <nav class="mb-4">
      <router-link to="/" class="mr-4">Home</router-link>
      <router-link to="/admin" class="mr-4">Admin</router-link>
      <router-link to="/sign-in">Sign In</router-link>
    </nav>
  <router-view />
</template>

<style scoped>

</style>
