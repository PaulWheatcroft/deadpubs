<!-- FlashMessage.vue -->
<template>
    <div v-if="message" class="flash-message" :class="type">
        {{ message }}
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFlashStore } from '../stores/flashStore'

const flashStore = useFlashStore()
const message = computed(() => flashStore.flashMessage)
const type = computed(() => flashStore.flashType)
</script>

<style scoped>
.flash-message {
    padding: 10px;
    margin: 15px;
    border-radius: 4px;
    color: white;
}
.flash-message.success {
    background-color: green;
}
.flash-message.error {
    background-color: red;
}
</style>
  