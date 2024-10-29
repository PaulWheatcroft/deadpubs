<script setup lang="ts">
import { Establishment } from '../types/establishment'

const props = defineProps<{
  establishment: Establishment
}>()
</script>

<template>
  <div class="p-4 bg-white rounded-lg shadow-md max-w-3xl mx-auto mb-4">
    <!-- Card for each establishment -->
    <h3 class="text-xl font-semibold mb-2">{{ establishment.name }}</h3>
    <ul class="mb-4 text-gray-600">
      <li>{{ establishment.street }}</li>
      <li>{{ establishment.city }}</li>
      <li v-if="establishment.county">{{ establishment.county }}</li>
      <li>{{ establishment.postcode }}</li>
    </ul>

    <!-- Scores in a 2x2 grid (quadrants) -->
    <div class="grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg">
      <div class="flex items-center justify-center p-4 bg-gray-200 rounded-lg">
        <span class="text-xl font-bold">{{ establishment.interiors_score }}</span>
        <p class="ml-2">Interior</p>
      </div>
      <div class="flex items-center justify-center p-4 bg-gray-200 rounded-lg">
        <span class="text-xl font-bold">{{ establishment.ambience_score }}</span>
        <p class="ml-2">Ambience</p>
      </div>
      <div class="flex items-center justify-center p-4 bg-gray-200 rounded-lg">
        <span class="text-xl font-bold">{{ establishment.drinks_score }}</span>
        <p class="ml-2">Drinks</p>
      </div>
      <div class="flex items-center justify-center p-4 bg-gray-200 rounded-lg">
        <span class="text-xl font-bold">{{ establishment.dpf_score }}</span>
        <p class="ml-2">DPF</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>