import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import supabase from '../api/client'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  

  async function checkAuthStatus() {
    const { data: { user } } = await supabase.auth.getUser()
    isLoggedIn.value = !!user
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error(error)
    } else {
      isLoggedIn.value = false
    }
  }

  onMounted(() => {
    checkAuthStatus()
    supabase.auth.onAuthStateChange((event, session) => {
      isLoggedIn.value = !!session
    })
  })

  return { isLoggedIn, signOut, checkAuthStatus }
})
