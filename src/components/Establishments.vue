<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import Establishment from './Establishment.vue'

defineProps({
  msg: String,
})

const supabaseUrl = import.meta.env.VITE_SUPERBASE_URL
const supabaseKey = import.meta.env.VITE_SUPERBASE_KEY

console.log(supabaseUrl, supabaseKey)

const supabase = createClient(supabaseUrl, supabaseKey)


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