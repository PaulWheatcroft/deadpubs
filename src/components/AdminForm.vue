<script setup>
import { ref, onMounted, defineProps } from 'vue'
import { addEstablishment, getEstablishment, updateEstablishment } from '../api/establishmentApi'
import { useRoute } from 'vue-router'
import { useFlashStore } from '../stores/flashStore'

const route = useRoute()

let establishmentId

if (route.params.establishmentId) {
  establishmentId = route.params.establishmentId
}

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

async function handleFormSubmit() {
  const totalScore = establishment.value.ambience_score + establishment.value.drinks_score + establishment.value.interiors_score + establishment.value.dpf_score
  establishment.value.total_score = totalScore
  if (!establishmentId) {
    const result = await addEstablishment(establishment.value, flashStore)
  if (result.success) {
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
    }
  } else if (establishmentId) {
    const result = await updateEstablishment(establishment.value, establishmentId, flashStore)
    if (result.success) {
    }
  }
}

if (establishmentId) {
  onMounted(async () => {
    if (establishmentId) {
      const result = await getEstablishment(establishmentId)
      if (result.success) {
        establishment.value = result.establishment
      }
    }
  })
}
</script>

<template>
    <div>
        <form @submit.prevent="handleFormSubmit" class="max-w-xs sm:max-w-md md:max-w-3xl mx-auto p-4 bg-gray-600 rounded shadow-md admin-container">
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
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{{ establishmentId ? 'Update' : 'Submit' }}</button>
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
  
 