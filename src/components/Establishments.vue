<script setup>
import { ref, onMounted } from 'vue'
import supabase from '../api/client'

import Establishment from './Establishment.vue'

defineProps({
  msg: String,
})

const establishments = ref(null)

async function getEstablishments() {
  const response = await supabase.from('establishment').select('*').order('name', { ascending: true })
  const { data, error } = await response
  if (data) {
    establishments.value = data
  } else if (error) {
    console.error(error)
  }
}

async function getEstablishmentsOrderDPF() {
  const response = await supabase.from('establishment').select('*').order('dpf_score', { ascending: false })
  const { data, error } = await response
  if (data) {
    establishments.value = data
  } else if (error) {
    console.error(error)
  }
}

async function getEstablishmentsOrderByTotalScore() {
  const response = await supabase.from('establishment').select('*').order('total_score', { ascending: false })
  const { data, error } = await response
  if (data) {
    establishments.value = data
  } else if (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await getEstablishments()
})


</script>

<template>
    <div class="flex flex-col gap-2 sm:flex-row pb-2 justify-center">
      <button @click="getEstablishments" class="p-2 bg-orange-300 text-gray-700 rounded"><i class="fa-solid fa-arrow-down-a-z"></i> Order Name</button>
      <button @click="getEstablishmentsOrderDPF" class="p-2 bg-orange-400 text-gray-700 rounded"><i class="fa-solid fa-wand-magic-sparkles"></i> Order DPF</button>
      <button @click="getEstablishmentsOrderByTotalScore" class="p-2 bg-orange-500 text-gray-700 rounded"><i class="fa-solid fa-calculator"></i> Order Total</button>
    </div>
    <Establishment v-for="establishment in establishments" :key="establishment.id" :establishment="establishment" />
</template>

<style scoped>

</style>