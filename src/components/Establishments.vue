<script setup>
import { ref, onMounted } from 'vue'
import supabase from '../api/client'

import Establishment from './Establishment.vue'

defineProps({
  msg: String,
})

const establishments = ref(null)

async function getEstablishments() {
  const response = await supabase.from('establishment').select('*')
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
    <Establishment v-for="establishment in establishments" :key="establishment.id" :establishment="establishment" />
</template>

<style scoped>

</style>