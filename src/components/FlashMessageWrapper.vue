<!-- FlashMessagesWrapper.vue -->
<template>
    <FlashMessage v-if="flashStore.flashMessage" class="flash-message-wrapper" :message="flashStore.flashMessage" :type="flashStore.flashType"/>
</template>

<script setup>
    import { useFlashStore } from '../stores/flashStore'
    import FlashMessage from './FlashMessage.vue'

    const flashStore = useFlashStore()
</script>

<style scoped>
    .flash-message-wrapper {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
    }
</style>
  