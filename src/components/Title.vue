<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="dpf-font-style">{{ msg }}</h1>
</template>

<style scoped>
.dpf-font-style {
    font-family: "Orelega One", serif;
    font-weight: 400;
    font-style: normal;
    font-style: italic;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: rgb(228, 199, 56);
}
h1 {
  top: -10px;
  text-align: center;
}
</style>
