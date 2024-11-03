<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import supabase from '../api/client'
import { useFlashStore } from '../stores/flashStore'
import Title from '../components/Title.vue'

const flashStore = useFlashStore()

const router = useRouter()

let user = ref({
    email: '',
    password: '',
})


async function login() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: user.value.email,
        password: user.value.password,
    })

    if (error) {
        flashStore.setFlash(`${error.message}`, 'error')
    } else if (data) {
        user.value = {
            email: '',
            password: '',
        }
        flashStore.setFlash('You have logged in successfully!', 'success')
        router.push({ name: 'Home' })
    }
}

async function seeCurrentUser() {
    const { data, error } = await supabase.auth.getSession()
    console.log(data)
}
</script>

<template>
    <div>
        <Title msg="Sign In" />
    </div>
    <div>
        <form @submit.prevent="login" class="max-w-md mx-auto p-4 signin-container bg-gray-600 ml-2 mr-2">
            <h2 class="text-lg font-bold mb-4">Login</h2>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input type="email" id="name" v-model="user.email" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <input type="password" id="street" v-model="user.password" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
        </form>
        <div class="max-w-md mx-auto p-4">
            <button type="submit" @click="seeCurrentUser" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">See Current User</button>
        </div>
    </div>
</template>

<style scoped>
.signin-container {
    border: 2px solid rgb(228, 199, 56);
    border-radius: 10px;
}
h2, label {
    color: rgb(228, 199, 56);
}
</style>