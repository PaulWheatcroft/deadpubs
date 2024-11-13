<script setup>
import { ref, onMounted } from 'vue'
import supabase from '../api/client'

import Establishment from './Establishment.vue'

defineProps({
  msg: String,
})

const establishments = ref(null)
const sortType = ref('')

async function getEstablishments() {
  const response = await supabase.from('establishment').select('*').order('name', { ascending: true })
  const { data, error } = await response
  if (data) {
    establishments.value = data
    sortType.value = 'name'
  } else if (error) {
    console.error(error)
  }
}

async function getEstablishmentsOrderDPF() {
  const response = await supabase.from('establishment').select('*').order('dpf_score', { ascending: false })
  const { data, error } = await response
  if (data) {
    establishments.value = data
    sortType.value = 'dpf'
  } else if (error) {
    console.error(error)
  }
}

async function getEstablishmentsOrderByTotalScore() {
  const response = await supabase.from('establishment').select('*').order('total_score', { ascending: false })
  const { data, error } = await response
  if (data) {
    establishments.value = data
    sortType.value = 'total'
  } else if (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await getEstablishments()
})


</script>

<template>
    <div class="flex flex-col gap-2 sm:flex-row pb-2 justify-center font-bold pb-4">
      <button @click="getEstablishments" class="p-2 bg-orange-300 text-gray-700 rounded md:hover:underline sm:min-w-[200px]"><i class="fa-solid fa-arrow-down-a-z"></i> Name <i v-if="sortType === 'name'" class="fa-regular fa-hand-point-left"></i></button>
      <button @click="getEstablishmentsOrderDPF" class="p-2 bg-orange-400 text-gray-700 rounded md:hover:underline sm:min-w-[200px]"><i class="fa-solid fa-wand-magic-sparkles"></i> DPF <i v-if="sortType === 'dpf'" class="fa-regular fa-hand-point-left"></i></button>
      <button @click="getEstablishmentsOrderByTotalScore" class="p-2 bg-orange-500 text-gray-700 rounded md:hover:underline sm:min-w-[200px]"><i class="fa-solid fa-calculator"></i> Total <i v-if="sortType === 'total'" class="fa-regular fa-hand-point-left"></i></button>
    </div>
    <Establishment v-for="establishment in establishments" :key="establishment.id" :establishment="establishment" isLoggedIn=isLoggedIn />
</template>

<style scoped>

</style>