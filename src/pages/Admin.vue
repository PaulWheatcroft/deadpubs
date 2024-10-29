<script setup>
import { ref } from 'vue'
import supabase from '../api/client'

import Title from '../components/Title.vue'

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
  const { data, error } = await supabase
    .from('establishment')
    .insert([establishment.value])

  if (data) {
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
    console.error(error)
  }
}
</script>

<template>
    <div>
        <Title msg="Admin" />
    </div>
    <div>
        <form @submit.prevent="addEstablishment" class="max-w-md mx-auto p-4 bg-white rounded shadow-md">
            <h2 class="text-lg font-bold mb-4">Add Establishment</h2>
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input type="text" id="name" v-model="establishment.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="street" class="block text-gray-700 text-sm font-bold mb-2">Street:</label>
                <input type="text" id="street" v-model="establishment.street" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="city" class="block text-gray-700 text-sm font-bold mb-2">City:</label>
                <input type="text" id="city" v-model="establishment.city" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="county" class="block text-gray-700 text-sm font-bold mb-2">County:</label>
                <input type="text" id="county" v-model="establishment.county" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="postcode" class="block text-gray-700 text-sm font-bold mb-2">Postcode:</label>
                <input type="text" id="postcode" v-model="establishment.postcode" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="ambience_score" class="block text-gray-700 text-sm font-bold mb-2">Ambience Score:</label>
                <input type="number" id="ambience_score" v-model="establishment.ambience_score" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="drinks_score" class="block text-gray-700 text-sm font-bold mb-2">Drinks Score:</label>
                <input type="number" id="drinks_score" v-model="establishment.drinks_score" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="interiors_score" class="block text-gray-700 text-sm font-bold mb-2">Interiors Score:</label>
                <input type="number" id="interiors_score" v-model="establishment.interiors_score" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="dpf_score" class="block text-gray-700 text-sm font-bold mb-2">DPF Score:</label>
                <input type="number" id="dpf_score" v-model="establishment.dpf_score" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Establishment</button>
        </form>
    </div>
  </template>
  
 