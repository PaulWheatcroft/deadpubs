<script setup>
import { ref } from 'vue'
import supabase from '../api/client'
import { useFlashStore } from '../stores/flashStore'

import Title from '../components/Title.vue'

const flashStore = useFlashStore()

const establishment = ref({
  name: '',
  street: '',
  city: '',
  county: '',
  postcode: '',
  ambience_score: 0,
  drinks_score: 0,
  interiors_score: 0,
  dpf_score: 0,
})

async function addEstablishment() {
  const response = await supabase
    .from('establishment')
    .insert([establishment.value])

    console.log(response)

    if (response.status === 201) {
        flashStore.setFlash('Establishment added successfully!', 'success')
        console.log('Establishment added successfully!')
        establishment.value = {
        name: '',
        street: '',
        city: '',
        county: '',
        postcode: '',
        ambience_score: 0,
        drinks_score: 0,
        interiors_score: 0,
        dpf_score: 0,
    }
    } else {
        flashStore.setFlash('Establishment was not added', 'error')
        console.error("*****", response.error)
    }
}

function showSuccessMessage() {
  flashStore.setFlash('Operation was successful!', 'success')
}
</script>

<template>
    <div>
        <Title msg="Admin" />
    </div>
    <div>
        <form @submit.prevent="addEstablishment" class="max-w-lg mx-auto p-4 bg-gray-600 rounded shadow-md admin-container">
            <h2 class="text-lg font-bold mb-4 deadpubs-yellow">Add Establishment</h2>
            <div class="mb-4">
                <label for="name" class="block text-sm font-bold mb-2">Name:</label>
                <input type="text" id="name" v-model="establishment.name" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="street" class="block text-sm font-bold mb-2">Street:</label>
                <input type="text" id="street" v-model="establishment.street" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="city" class="block text-sm font-bold mb-2">City:</label>
                <input type="text" id="city" v-model="establishment.city" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="county" class="block text-sm font-bold mb-2">County:</label>
                <input type="text" id="county" v-model="establishment.county" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="postcode" class="block text-sm font-bold mb-2">Postcode:</label>
                <input type="text" id="postcode" v-model="establishment.postcode" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="grid grid-cols-4 gap-4 mb-4">

                <div class="col-span-1">
                    <label for="ambience_score" class="block text-gray-700 text-sm font-bold mb-2">Ambiencé<br />Score:</label>
                    <select id="ambience_score" v-model="establishment.ambience_score" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                    </select>
                </div>

                <div class="col-span-1">
                    <label for="drinks_score" class="block text-gray-700 text-sm font-bold mb-2">Drinks<br />Score:</label>
                    <select id="drinks_score" v-model="establishment.drinks_score" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                    </select>
                </div>

                <div class="col-span-1">
                    <label for="interiors_score" class="block text-gray-700 text-sm font-bold mb-2">Interiors<br />Score:</label>
                    <select id="interiors_score" v-model="establishment.interiors_score" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                    </select>
                </div>

                <div class="col-span-1">
                    <label for="dpf_score" class="block text-gray-700 text-sm font-bold mb-2">DPF<br />Score:</label>
                    <select id="dpf_score" v-model="establishment.dpf_score" class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                    </select>
                </div>

            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Establishment</button>
        </form>
    </div>
</template>

<style scoped>
.admin-container {
    border: 2px solid rgb(228, 199, 56);
    border-radius: 10px;
}
.deadpubs-yellow, label {
    color: rgb(228, 199, 56);
}
</style>
  
 