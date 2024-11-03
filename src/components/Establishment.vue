<script setup lang="ts">
import { Establishment } from '../types/establishment'
import { RouterLink, RouterView } from 'vue-router'

const props = defineProps<{
  establishment: Establishment,
  isLoggedIn: Boolean,
}>()
</script>

<template>
  <div class="p-4 bg-gray-600 max-w-xs sm:max-w-md md:max-w-3xl mx-auto mb-4 text-center establishment-container">
    <!-- Card for each establishment -->
    <h2 class="text-xl font-semibold dpf-font-style">{{ establishment.name }}</h2>
    <ul class="mb-4">
      <li class="text-sm text-gray-300">
        {{ establishment.street + ", " + establishment.city }}<span v-if="establishment.county">, {{ establishment.county }}</span>
      </li>
      <li class="font-bold text-lg dpf-font-style">{{ establishment.postcode }}</li>
    </ul>

    <!-- Scores in a 2x2 grid (quadrants) -->
    <div class="grid grid-cols-2 gap-1">
        <div class="flex items-center justify-center">
            <p class="">Ambiencé: {{ establishment.ambience_score }}</p>
        </div>
        <div class="flex items-center justify-center">
            <p class="">Drinks: {{ establishment.drinks_score }}</p>
        </div>
            <div class="flex items-center justify-center">
            <p class="">Interiors: {{ establishment.interiors_score }}</p>
        </div>
        <div class="flex items-center justify-center">
            <p class="">DPF: {{ establishment.dpf_score }}</p>
        </div>
    </div>
    <div v-if="isLoggedIn">
      <RouterLink :to="`/admin/${establishment.id}/edit`" class="p-2 bg-orange-400 text-gray-700 rounded md:hover:underline sm:min-w-[200px]"><i class="fa-solid fa-square-pen"></i> Edit</RouterLink>
    </div>
  </div>
</template>

<style scoped>
p {
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: rgb(228, 199, 56);
}
.dpf-font-style {
    font-family: "Orelega One", serif;
    font-weight: 400;
    font-style: normal;
    font-style: italic;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: rgb(228, 199, 56);
}
.establishment-container {
    border: 2px solid rgb(228, 199, 56);
    border-radius: 10px;
}
.deadpubs-yellow {
    color: rgb(228, 199, 56);
}
.total-score {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding-top: 33px;
    position:relative;
    line-height: 17px;
    top: -80px;
    right: -80%;
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: rgb(228, 199, 56);
    background-color: brown;
    border: 2px solid rgb(228, 199, 56);
}
</style>