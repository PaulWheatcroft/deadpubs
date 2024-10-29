// stores/flashStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFlashStore = defineStore('flash', () => {
  const flashMessage = ref(null)
  const flashType = ref('success')

  function setFlash(message, type = 'success') {
    flashMessage.value = message
    flashType.value = type
    setTimeout(() => {
      flashMessage.value = null
    }, 3000)
  }

  return { flashMessage, flashType, setFlash }
})
